"use client";
import { useState } from "react";
import {QRCodeSVG} from "qrcode.react";

const CartPage = () => {
  const [totalAmount, setTotalAmount] = useState<number | string>("");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTotalAmount(value === "" ? "" : parseFloat(value));
  };

  const handleCheckout = () => {
    const amount = typeof totalAmount === "string" ? parseFloat(totalAmount) : totalAmount;

    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    setShowQRCode(true);
  };

  const upiId = "syndroy20araujo@okhdfcbank"; //  UPI ID
  const upiUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${totalAmount}&cu=INR&tn=Order%20Payment`;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

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

        <div className="mt-4">
          <p className="text-lg font-medium">Total Amount: {totalAmount ? `Rs ${totalAmount}` : "N/A"}</p>
        </div>

        <button
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>

        {showQRCode && (
          <div className="mt-6 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4">Scan to Pay via Google Pay</h2>
            <QRCodeSVG value={upiUrl} size={200} />
            <p className="text-sm text-gray-600 mt-2">
              UPI ID: <strong>{upiId}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
