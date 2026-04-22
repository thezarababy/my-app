import { Doctor } from "../types";

export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiologist",
    image: "/assets/doctor1.png",
    rating: 4.8,
    patients: 1240,
    availability: ["9:00 AM", "12:00 PM", "3:00 PM"],
    about: "Dr. Jenkins is a renowned cardiologist with over 15 years of experience in managing cardiovascular health. She is dedicated to comprehensive patient care."
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    image: "/assets/doctor2.png",
    rating: 4.9,
    patients: 850,
    availability: ["12:00 PM", "3:00 PM", "6:00 PM"],
    about: "Dr. Chen specializes in medical and cosmetic dermatology. He helps patients achieve their best skin health through cutting-edge treatments."
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "/assets/doctor3.png",
    rating: 4.7,
    patients: 3200,
    availability: ["9:00 AM", "12:00 PM", "6:00 PM"],
    about: "Dr. Rodriguez is compassionate and friendly, making her a favorite among young patients and their parents for general pediatric care."
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    image: "/assets/doctor4.png",
    rating: 4.6,
    patients: 910,
    availability: ["9:00 AM", "3:00 PM"],
    about: "Dr. Wilson focuses on the treatment of nervous system disorders, offering state-of-the-art diagnostic and therapeutic care."
  },
  {
    id: "5",
    name: "Dr. Olivia Bennett",
    specialty: "Psychiatrist",
    image: "/assets/doctor5.png",
    rating: 4.9,
    patients: 620,
    availability: ["12:00 PM", "3:00 PM", "6:00 PM"],
    about: "Dr. Bennett provides a safe, non-judgmental environment for patients struggling with mental health issues, specializing in anxiety and depression."
  },
  {
    id: "6",
    name: "Dr. William Patel",
    specialty: "Orthopedic Surgeon",
    image: "/assets/doctor6.png",
    rating: 4.8,
    patients: 1540,
    availability: ["9:00 AM", "6:00 PM"],
    about: "Dr. Patel brings advanced minimally invasive surgical techniques to his practice, ensuring faster recovery for joint and bone conditions."
  },
  {
    id: "7",
    name: "Dr. Aisha Khan",
    specialty: "Gynecologist",
    image: "/assets/doctor7.png",
    rating: 4.9,
    patients: 2100,
    availability: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
    about: "Dr. Khan is committed to women's health, providing comprehensive care across all life stages from routine exams to specialized treatments."
  },
  {
    id: "8",
    name: "Dr. David Kim",
    specialty: "General Practitioner",
    image: "/assets/doctor8.png",
    rating: 4.5,
    patients: 4300,
    availability: ["12:00 PM", "6:00 PM"],
    about: "Dr. Kim is a dedicated family physician bringing a holistic approach to general medicine, emphasizing preventive care and healthy lifestyles."
  }
];
