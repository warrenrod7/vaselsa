// components/Navbar.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 ">
      <div className="flex items-center justify-between">
        {/* Company Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Company Logo" width={250} height={60} />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-800 font-medium">
        <li>
            <Link href="/search">
              <div className="flex items-center space-x-1">
                <IoIosSearch className="text-3xl" />
                
              </div>
            </Link>
          </li>
          
          <li>
            <Link href="/cart">
              <div className="flex items-center space-x-1">
                <HiOutlineShoppingBag className="text-3xl" />
                
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
