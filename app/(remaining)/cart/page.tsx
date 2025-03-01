"use client";
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const { items, removeFromCart } = useCart();
  const router = useRouter();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">INR {item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: INR {total.toFixed(2)}</p>
            <button 
              onClick={() => router.push('/checkout')}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
