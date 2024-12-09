import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-6 border-b border-gray-300">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" legacyBehavior>
            <a className="text-black hover:text-gray-700">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className="text-black hover:text-gray-700">About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className="text-black hover:text-gray-700">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/services" legacyBehavior>
            <a className="text-black hover:text-gray-700">Services</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
