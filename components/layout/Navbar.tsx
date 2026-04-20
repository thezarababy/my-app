"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartPulse, Menu, User, Bell, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled
      ? "bg-white shadow-sm border-gray-200"
      : "bg-white/50 backdrop-blur-md border-transparent"
      }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm ring-1 ring-blue-600/20">
              <HeartPulse size={20} strokeWidth={2.5} />
            </div>
            <a href="/" className="text-xl font-bold tracking-tight text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
              Virtu<span className="text-blue-600">Care</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/book"
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${pathname === "/book" ? "text-blue-600 border-b-2 border-blue-600 py-5" : "text-gray-600 py-5"
                }`}
            >
              Find a Doctor
            </Link>
            <Link
              href="/appointments"
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${pathname === "/appointments" ? "text-blue-600 border-b-2 border-blue-600 py-5" : "text-gray-600 py-5"
                }`}
            >
              My Appointments
            </Link>
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Bell size={20} className="text-gray-500 transition-colors hover:text-gray-900 cursor-pointer" />
            <div className="h-6 w-[1px] bg-gray-200"></div>

            <div className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium gap-2 text-gray-700 transition-colors hover:bg-gray-100 cursor-pointer">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <User size={16} />
              </div>
              <span className="hidden lg:inline-block">Joy Okoduwa</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden relative z-50">
            {isMobileMenuOpen ? (
              <X
                size={24}
                className="text-gray-600 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <Menu
                size={24}
                className="text-gray-600 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] z-40 h-[calc(100vh-64px)] w-full bg-white px-4 py-6 shadow-xl flex flex-col">
          <div className="flex flex-col space-y-6 flex-1">
            <Link
              href="/book"
              className={`text-xl font-semibold transition-colors hover:text-blue-600 ${pathname === "/book" ? "text-blue-600" : "text-gray-800"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find a Doctor
            </Link>
            <Link
              href="/appointments"
              className={`text-xl font-semibold transition-colors hover:text-blue-600 ${pathname === "/appointments" ? "text-blue-600" : "text-gray-800"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Appointments
            </Link>

            <div className="my-2 h-px w-full bg-gray-100"></div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center justify-between text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <User size={24} />
                  </div>
                  <span className="font-semibold text-lg text-gray-900">Joy Okoduwa</span>
                </div>
                <div className="p-2 rounded-full bg-gray-50">
                  <Bell size={24} className="text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
