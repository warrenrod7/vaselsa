'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface AddressForm {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export default function Checkout() {
  const { items } = useCart();
  const router = useRouter();
  const total = items.reduce((sum, item) => sum + item.price, 0);
  
  const [address, setAddress] = useState<AddressForm>({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log('Order details:', {
      items,
      address,
      total
    });
    
    // For now, just show an alert
    alert('Order placed successfully!');
    router.push('/');
  };

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
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

        <div className="mt-6 border-t pt-6">
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
  );
} 