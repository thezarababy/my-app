# VirtuCare – Appointment Booking App

A responsive healthcare appointment booking application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
The app allows users to browse doctors, book appointments, and manage scheduled visits with persistent local storage.

---

## GitHub Repository

🔗 [my-app repo](https://github.com/thezarababy/my-app.git)

---

# Project Overview

This project was built as part of the **VirtuCare Take-Home Assessment**.  
The goal was to create a simplified appointment booking flow that focuses on usability, clean structure, and shipping a working product within the given timeline.

Users can:

- View available doctors
- Book appointments
- Prevent double-booking
- View booked appointments
- Cancel appointments
- Keep appointments saved after refresh

---

# Tech Stack

- **Next.js 15+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **React Context API**
- **LocalStorage**
- **Lucide Icons**
- **sonner** (notifications)
- **React Hook Form** (forms)
- **Zod** (validation)

---

# Features Implemented

## Doctors Listing Page

- Displays a list of available doctors
- Each doctor includes:
  - Name
  - Specialty
  - Ratings
  - Available time slots
- Responsive card layout
- Hover animations and clean UI

## Book Appointment Flow

Users can:

- Select a doctor
- Pick a date
- Choose available time slot
- Enter reason for visit
- Submit appointment

Validation includes:

- Required fields
- Preventing duplicate bookings for same doctor/time/date

## Appointments Dashboard

- View all booked appointments
- Shows:
  - Doctor name
  - Appointment date
  - Time
  - Reason for visit
- Cancel/Delete appointments
- Empty state if no bookings exist

## Persistence

- All appointments stored in **localStorage**
- Data remains after page refresh

---

# My Approach

I approached this project like a real production feature by focusing on:

## 1. Clean Architecture First

Before writing UI, I structured the project into reusable folders:

```bash
app/
components/
context/
data/
types/
utils/
```

This made the codebase easier to scale and maintain.

## 2.Reusable Components

Instead of repeating UI, I created reusable components such as:
````bash
Navbar
Doctor Cards
Appointment Cards
Buttons
Empty States
````

## 3. State Management

I used React Context API to manage appointments globally.
This avoided prop drilling and made it easier to access bookings across pages.

## 4. Persistence Strategy

Since no backend was required, I used:

React state for UI updates
localStorage for persistence

This gave users a realistic experience.

## 5. UX Focus

I added:
````bash
Loading skeleton states
Hover transitions
Toast notifications
Mobile responsiveness
Clear navigation
````

## Key Decisions Made

## 1.Using Context API Instead of Prop Drilling

Because appointments are needed across multiple pages, Context was the cleanest lightweight solution.

## 2.LocalStorage Instead of Backend

The task required no backend, so localStorage was ideal for persisting user bookings.

## 3.Mock Data for Doctors

I used structured mock doctor data for speed and maintainability.

## 4.Next.js App Router

Using the App Router keeps routing modern and scalable.

## 5.TypeScript Everywhere

Strong typing reduced bugs and improved maintainability.

## Challenges Faced

## 1.Preventing Double Booking

One challenge was ensuring users could not book the same doctor, date, and time twice.

Solution:
Before creating a booking, I checked existing appointments in state/localStorage.

## 2. localStorage + Hydration Issues

Since Next.js uses server rendering, accessing localStorage too early can cause errors.

Solution:
I handled localStorage inside useEffect() so it only runs on the client.

## 3. Keeping UI Clean While Moving Fast

The assessment emphasized shipping quickly without over-engineering.

Solution:
I focused on:

Core features first
Clean UI polish after logic was complete
Reusable patterns to save time

## 4. Responsive Design

Ensuring layouts worked smoothly on mobile and desktop required careful spacing/grid decisions.

## Final Thoughts

This project was built with a focus on:

Shipping usable features fast
Clean code structure
Strong UX decisions
Scalability for future growth

I treated the assessment like a real startup feature build rather than just a coding task.

## Author

Joy Okoduwa
Frontend Developer | React | Next.js | TypeScript