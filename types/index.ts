export type AppointmentTime = "9:00 AM" | "12:00 PM" | "3:00 PM" | "6:00 PM";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  patients: number;
  availability: AppointmentTime[];
  about: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  date: string;
  time: AppointmentTime;
  status: "pending" | "confirmed" | "cancelled";
  reason?: string;
}
