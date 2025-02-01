// components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold">Beauty Parlour</h1>
        <div className="space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/services" className="text-white">Services</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
