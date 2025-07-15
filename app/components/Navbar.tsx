'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-200 text-amber-800 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold hover:text-green-400 transition">
             Game Info App
          </span>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <span className="hover:text-green-400 transition">Home</span>
          </Link>
          <Link href="#">
            <span className="hover:text-green-400 transition">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
