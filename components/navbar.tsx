// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Company Logo */}
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="Company Logo" width={100} height={40} />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-800 font-medium">
          
          <li>
            <Link href="/cart">
              <div className="flex items-center space-x-1">
                <HiOutlineShoppingBag className="text-xl" />
                <span>Cart</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
