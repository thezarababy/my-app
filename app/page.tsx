import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <section className="relative w-full flex-1 min-h-[calc(100vh-64px)] flex items-center justify-center">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg leading-tight">
            Find and Book Top Doctors Near You
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md font-medium max-w-2xl">
            Experience premium healthcare at your fingertips. Connect with top specialists and book your appointments seamlessly.
          </p>
          <Link href="/book" className="mt-4">
            <Button variant="primary" className="px-8 py-4 text-base md:text-lg font-semibold shadow-xl rounded-full bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 text-white">
              Find a Doctor
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}