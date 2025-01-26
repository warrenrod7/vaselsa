import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_SECRET_ID,
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    // Convert amount to paise (multiply by 100) and ensure it's an integer
    const amountInPaise = Math.round(amount * 100);
    
    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Error creating order' },
      { status: 500 }
    );
  }
}
