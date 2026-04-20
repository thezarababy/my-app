import React from 'react';
import { mockDoctors } from '@/data/mockDoctors';
import { DoctorCard } from '@/components/doctors/DoctorCard';
import { Search } from 'lucide-react';

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 flex flex-col flex-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Page Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Find your Specialist</h1>
            <p className="mt-2 text-lg text-gray-600">Browse and book an appointment with our trusted professionals.</p>
          </div>
          
          <div className="relative w-full md:max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none sm:text-sm"
              placeholder="Search by doctor name or specialty..."
            />
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
          {mockDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

      </div>
    </div>
  );
}
