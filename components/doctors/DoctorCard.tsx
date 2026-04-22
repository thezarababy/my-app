import React from 'react';
import Link from 'next/link';
import { Doctor } from '@/types';
import { Star, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-lg overflow-hidden h-full flex-1">

      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 border-b border-gray-50 flex items-center justify-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute text-gray-400 font-medium text-sm -z-10">{doctor.name} Image</span>
      </div>


      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {doctor.name}
            </h3>
            <p className="text-sm font-medium text-blue-600 mt-1">
              {doctor.specialty}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 flex-shrink-0 py-1 rounded-md text-yellow-700 border border-yellow-100">
            <Star size={14} className="fill-yellow-400 stroke-yellow-400" />
            <span className="text-xs font-bold">{doctor.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Users size={16} className="text-gray-400" />
            <span>{doctor.patients.toLocaleString()} Patients</span>
          </div>
        </div>


        <p className="text-sm text-gray-600 mt-4 line-clamp-2 mb-4">
          {doctor.about}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 flex-1 items-start content-start">
          {doctor.availability.map((time, index) => (
            <span key={index} className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              {time}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-md">
            <Calendar size={14} />
            <span>Available</span>
          </div>
          <Link href={`/book/${doctor.id}`}>
            <Button variant="outline" className="shadow-sm shadow-blue-500/20 active:scale-95">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
