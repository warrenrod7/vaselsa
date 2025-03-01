'use client';

import { useRouter } from 'next/navigation';
import { login } from './actions';


export default function LoginPage() {
  const router = useRouter();

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center flex-col space-y-6 px-4"
      style={{ backgroundImage: "url('/loginbg.jpg')" }}
    >
      {/* Keep the overlay only inside the login card */}
      <div className="absolute inset-0  pointer-events-none"></div>

      {/* Logo - Ensure it's above the overlay */}
      <h2 className='text-center font-bold text-7xl'>VASELSA</h2>
      

      {/* Login Card with Background Lightening */}
      <div className="relative w-full max-w-md  p-6 ">
   
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In </h2>

        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3">
            <button
              formAction={login}
              className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-gray-300 hover:text-black"
            >
              Log in
            </button>

            <button
              type="button"
              onClick={() => router.push('/signup')}
              className="w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-800 hover:text-gray-100 transition duration-300"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
