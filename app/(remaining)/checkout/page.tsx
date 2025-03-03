'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

interface AddressForm {
  fullName: string;
  streetAddress: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    contact: string;
  };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export default function Checkout() {
  const { items } = useCart();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const [address, setAddress] = useState<AddressForm>({
    fullName: '',
    streetAddress: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  });

  useEffect(() => {
    const checkCart = () => {
      setIsLoading(false);
      if (items.length === 0) {
        router.push('/cart');
      }
    };
    checkCart();
  }, [items, router]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isScriptLoaded) {
      alert('Payment system is initializing. Please try again.');
      return;
    }

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
        }),
      });

      const order = await response.json();

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: total * 100,
        currency: 'INR',
        name: 'Vaselsa',
        description: 'Purchase Description',
        order_id: order.id,
        handler: async (response: RazorpayResponse) => {
          const verifyResponse = await fetch('/api/verifyOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(response),
          });

          if (verifyResponse.ok) {
            alert('Payment successful!');
            router.push('/payment-success');
          }
        },
        prefill: {
          name: address.fullName,
          contact: address.phone,
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (isLoading) {
    return <div className="max-w-2xl mx-auto p-6">Loading...</div>;
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
        onLoad={() => setIsScriptLoaded(true)}
        onError={(e) => {
          console.error('Script failed to load', e);
          alert('Failed to load payment system');
        }}
      />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Shipping Address</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={address.fullName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress"
              required
              value={address.streetAddress}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Landmark
            </label>
            <input
              type="text"
              name="landmark"
              required
              value={address.landmark}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                required
                value={address.city}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                name="state"
                required
                value={address.state}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PIN Code
              </label>
              <input
                type="text"
                name="pincode"
                required
                pattern="[0-9]{6}"
                value={address.pincode}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                value={address.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total Amount:</span>
              <span className="text-lg font-bold">INR {total.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              Place Order (INR {total.toFixed(2)})
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
