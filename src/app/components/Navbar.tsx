// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl md:text-2xl text-white font-semibold tracking-wide">
          Beauty Parlour
        </h1>
        <div className="flex space-x-6">
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
      </div>
    </nav>
  );
}
