"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { Appointment } from '@/types';

interface AppointmentContextType {
    appointments: Appointment[];
    addAppointment: (appointment: Omit<Appointment, 'id' | 'status'>) => void;
    cancelAppointment: (id: string) => void;
    deleteAppointment: (id: string) => void;
    updateAppointment: (id: string, updates: Partial<Appointment>) => void;
}

export const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: ReactNode }) {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('virtucare_appointments');
        if (saved) {
            try {
                setAppointments(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse appointments", e);
            }
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('virtucare_appointments', JSON.stringify(appointments));
        }
    }, [appointments, isLoaded]);

    const addAppointment = (newAppointmentData: Omit<Appointment, 'id' | 'status'>) => {
        const newAppointment: Appointment = {
            ...newAppointmentData,
            id: Math.random().toString(36).substr(2, 9),
            status: "confirmed",
        };
        setAppointments(prev => [...prev, newAppointment]);
        toast.success("Appointment booked successfully!");
    };

    const cancelAppointment = (id: string) => {
        setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status: 'cancelled' } : apt));
        toast.info("Appointment cancelled.");
    };

    const deleteAppointment = (id: string) => {
        setAppointments(prev => prev.filter(apt => apt.id !== id));
        toast.error("Appointment deleted.");
    };

    const updateAppointment = (id: string, updates: Partial<Appointment>) => {
        setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, ...updates } : apt));
    };

    return (
        <AppointmentContext.Provider value={{ appointments, addAppointment, cancelAppointment, deleteAppointment, updateAppointment }}>
            {children}
        </AppointmentContext.Provider>
    );
}

export function useAppointments() {
    const context = useContext(AppointmentContext);
    if (context === undefined) {
        throw new Error('useAppointments must be used within an AppointmentProvider');
    }
    return context;
}
