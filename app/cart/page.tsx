"use client"
import { useState } from 'react';

const CartPage = () => {
  const [totalAmount, setTotalAmount] = useState<number | string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTotalAmount(value === '' ? '' : parseFloat(value));
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {/* Input Field for Total Order Amount */}
        <div className="mb-6">
          <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Total Order Amount:
          </label>
          <input
            id="totalAmount"
            type="number"
            value={totalAmount}
            onChange={handleInputChange}
            placeholder="Enter amount"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Display Total Amount */}
        <div className="mt-4">
          <p className="text-lg font-medium">Total Amount: {totalAmount ? `Rs ${totalAmount}` : 'N/A'}</p>
        </div>

        {/* Checkout Button */}
        <button
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={() => alert(`Checkout with total amount: $${totalAmount}`)}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
