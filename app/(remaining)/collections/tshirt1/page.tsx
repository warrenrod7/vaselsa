"use client"
import { useState } from "react";
import { useCart } from '@/context/CartContext';


export default function ProductPage() {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = {
    id: 'tshirt1',
    name: 'Classic T-Shirt 1',
    price: 29.99,
    image: '/tshirt.jpeg'
  };

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size');
      return;
    }
    
    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart({
        ...product,
        id: `${product.id}-${size}-${Date.now()}-${i}`, // Unique ID for each item
        name: `${product.name} (${size})`
      });
    }
    alert(`Added ${quantity} item(s) of size ${size} to the cart!`);
  };

  const handleBuyNow = () => {
    if (!size) {
      alert('Please select a size');
      return;
    }
    
    handleAddToCart();
    window.location.href = '/cart';
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Product Image */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img
            src="/tshirt.jpeg"
            alt="Classic T-Shirt"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Classic T-Shirt</h1>
          <p className="text-lg text-gray-500 mb-4">INR {product.price}</p>

          {/* Select Size */}
          <div className="mb-4">
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
              Select Size:
            </label>
            <select
              id="size"
              className="border border-gray-300 rounded-md p-2 w-full h-9"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Select</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>

          {/* Select Quantity */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Select Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
