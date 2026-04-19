"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/kinsu_logo.png"
              alt="Kinsu Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900">Kinsu</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#ai"
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              AI Technology
            </Link>
            <Link
              href="#security"
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Security
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-teal-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#ai"
                className="text-sm font-medium text-gray-600 hover:text-teal-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Technology
              </Link>
              <Link
                href="#security"
                className="text-sm font-medium text-gray-600 hover:text-teal-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
