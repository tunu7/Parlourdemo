"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-700 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl md:text-2xl text-white font-semibold tracking-wide">
          Beauty Parlour
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-200 transition">
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-200 transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-200 transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-200 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-blue-700 text-white py-4 space-y-4`}
      >
        <Link
          href="/"
          className="block text-white hover:text-gray-200 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block text-white hover:text-gray-200 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/services"
          className="block text-white hover:text-gray-200 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="block text-white hover:text-gray-200 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
