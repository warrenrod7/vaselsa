"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/client";


export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
  
    // Validation
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your first and last name.");
      setLoading(false);
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Invalid phone number. Enter a 10-digit number.");
      setLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
  
    try {
      // Supabase Signup with User Metadata
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone: phone
          }
        }
      });
  
      if (error) {
        setError(error.message);
      } else {
        // Store user in the `users` table
        const user = data.user;
        if (user) {
          await supabase.from("users").insert([
            {
              id: user.id, // Use the same user ID from auth
              first_name: firstName,
              last_name: lastName,
              email: email.trim(),
              phone: phone
            }
          ]);
        }
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch  {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center flex-col space-y-6 px-4"
      style={{ backgroundImage: "url('/loginbg.jpg')" }}
    >
    <div className="flex flex-col items-center justify-center min-h-screen  p-8">
      <div className="flex justify-center mb-8">
        <h2 className="font-bold text-6xl">VASELSA</h2>
      </div>

      <h2 className="text-3xl font-bold mb-6 flex justify-center ">Sign Up</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      <form onSubmit={handleSignup} className="space-y-4 w-full max-w-md">
        {/* First & Last Name */}
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Enter your Confirm Password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="bg-gray-700 text-white px-4 py-2 rounded-md w-full hover:bg-gray-400  disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Redirect to Login */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            className="text-gray-600 hover:underline"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
        </p>
      </form>
    </div>
    </div>
  );
}