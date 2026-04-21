"use client";

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { mockDoctors } from '@/data/mockDoctors';
import { useAppointments } from '@/context/AppointmentContext';
import { AppointmentTime, Doctor } from '@/types';
import { Star, Users, CalendarDays, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function DoctorBookingPage({ params }: { params: Promise<{ doctorId: string }> }) {
  const router = useRouter();
  const { addAppointment, appointments } = useAppointments();


  const resolvedParams = use(params);
  const doctorId = resolvedParams.doctorId;

  const [doctor, setDoctor] = useState<Doctor>(
    mockDoctors.find(d => d.id === doctorId) as Doctor
  );

  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    date: '',
    time: '' as AppointmentTime | '',
    reason: ''
  });

  const bookedSlots = appointments
    .filter(apt => apt.doctorId === doctorId && apt.date === formData.date && apt.status !== 'cancelled')
    .map(apt => apt.time);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!doctor) {
      const foundDoctor = mockDoctors.find(d => d.id === doctorId);
      if (foundDoctor) setDoctor(foundDoctor);
    }
  }, [doctorId, doctor]);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.time) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      addAppointment({
        doctorId: doctor.id,
        patientName: formData.patientName,
        patientEmail: formData.patientEmail,
        date: formData.date,
        time: formData.time as AppointmentTime,
        reason: formData.reason
      });

      router.push('/appointments');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-8 md:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">


        <Link href="/book" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors mb-8 group">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to all doctors
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


          <div className="lg:col-span-1 border border-gray-100 p-6 rounded-3xl bg-white shadow-sm flex flex-col">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900">{doctor.name}</h1>
            <p className="text-blue-600 font-medium mt-1 mb-4">{doctor.specialty}</p>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 bg-yellow-50 px-2.5 py-1 rounded-md text-yellow-700 border border-yellow-100 shadow-sm">
                <Star size={16} className="fill-yellow-400 stroke-yellow-400" />
                <span className="text-sm font-bold">{doctor.rating}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Users size={16} />
                <span>{doctor.patients.toLocaleString()} Patients</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 border-l-4 border-blue-500 pl-3">About the Doctor</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {doctor.about}
              </p>
            </div>
          </div>


          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                <CalendarDays className="text-blue-600" /> Book an Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>
                    <label htmlFor="patientName" className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="patientName"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 px-4 text-gray-900 shadow-sm transition-all focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none sm:text-sm"
                      placeholder="Jane Doe"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    />
                  </div>


                  <div>
                    <label htmlFor="patientEmail" className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="patientEmail"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 px-4 text-gray-900 shadow-sm transition-all focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none sm:text-sm"
                      placeholder="jane@example.com"
                      value={formData.patientEmail}
                      onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                    />
                  </div>
                </div>


                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">Select Date</label>
                  <input
                    type="date"
                    id="date"
                    required
                    min={new Date().toISOString().split('T')[0]} // prevent past dates
                    className="w-full md:w-1/2 rounded-xl border border-gray-200 bg-gray-50/50 py-3 px-4 text-gray-900 shadow-sm transition-all focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none sm:text-sm"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>


                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Available Time Slots</label>
                  <div className="flex flex-wrap gap-3">
                    {doctor?.availability.map((time, index) => {
                      const isBooked = bookedSlots.includes(time);
                      return (
                        <button
                          key={index}
                          type="button"
                          disabled={isBooked}
                          onClick={() => setFormData({ ...formData, time })}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all text-sm font-medium ${isBooked
                            ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                            : formData.time === time
                              ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                              : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                        >
                          <Clock size={16} className={formData.time === time && !isBooked ? 'text-blue-100' : 'text-gray-400'} />
                          <span className={isBooked ? 'line-through' : ''}>{time}</span>
                          {isBooked && <span className="text-[10px] uppercase font-bold ml-1 text-red-500">Booked</span>}
                        </button>
                      );
                    })}
                  </div>
                  {!formData.time && <p className="text-xs text-amber-600 mt-2 font-medium">* Please select a time slot</p>}
                </div>


                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-2">Reason for Visit <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea
                    id="reason"
                    rows={4}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 px-4 text-gray-900 shadow-sm transition-all focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none sm:text-sm resize-none"
                    placeholder="Briefly describe your symptoms or reason for the appointment."
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  />
                </div>


                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full md:w-auto px-8 py-4 text-base font-bold shadow-lg shadow-blue-500/20 active:scale-95 disabled:opacity-70 disabled:active:scale-100 transition-all rounded-xl relative overflow-hidden"
                    disabled={isSubmitting || !formData.time}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Booking...
                      </span>
                    ) : 'Confirm Appointment'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}