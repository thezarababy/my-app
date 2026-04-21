"use client";

import React, { useState } from 'react';
import { useAppointments } from '@/context/AppointmentContext';
import { mockDoctors } from '@/data/mockDoctors';
import { Calendar, Clock, User, FileText } from 'lucide-react';


const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
    case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function AppointmentsPage() {
  const { appointments, cancelAppointment, deleteAppointment, updateAppointment } = useAppointments();

  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editReason, setEditReason] = React.useState('');
  const [error, setError] = React.useState('');

  const startEdit = (apt: { id: React.SetStateAction<string | null>; reason: any; }) => {
    setEditingId(apt.id);
    setEditReason(apt.reason ?? '');
    setError('');
  };

  const handleSave = (id: string) => {
    if (editReason.length > 200) {
      setError('Reason must be 200 characters or less');
      return;
    }
    updateAppointment(id, { reason: editReason });
    setEditingId(null);
    setEditReason('');
  };



  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Your Appointments</h1>

        {appointments.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-200 p-8 text-center shadow-sm">
            <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-lg text-gray-500 font-medium">You have no booked appointments yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((apt) => {
              const doctor = mockDoctors.find(d => d.id === apt.doctorId);

              return (
                <div key={apt.id} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6 transition-all hover:shadow-md">

                  <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
                    <div className="flex items-center gap-4">
                      {doctor && (
                        <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full object-cover border border-gray-100" />
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{doctor?.name || 'Unknown Doctor'}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-1">{doctor?.specialty}</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <User size={14} />
                          <span>For: {apt.patientName}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap md:flex-col gap-3 md:gap-2 items-start md:items-end flex-1">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${getStatusColor(apt.status)} capitalize`}>
                        {apt.status}
                      </span>
                      <div className="flex items-center gap-3 text-sm text-gray-700 font-medium bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={16} className="text-blue-500" />
                          <span>{apt.date}</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={16} className="text-blue-500" />
                          <span>{apt.time}</span>
                        </div>
                      </div>

                      {apt.reason && (
                        <div className="w-full md:w-auto md:max-w-xs text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100 mt-2 md:mt-0">
                          <div className="flex items-center gap-1.5 mb-1 font-semibold text-gray-700">
                            <FileText size={14} /> Reason:
                          </div>
                          <p className="truncate" title={apt.reason}>{apt.reason}</p>
                        </div>
                      )}
                    </div>
                  </div>


                  <div className="flex md:flex-col items-center md:items-end justify-end gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                    {apt.status !== 'cancelled' && (
                      <button
                        onClick={() => cancelAppointment(apt.id)}
                        className="w-full md:w-auto text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors border border-red-100"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      onClick={() => deleteAppointment(apt.id)}
                      className="w-full md:w-auto text-xs font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors border border-gray-100 md:border-transparent md:hover:border-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
