"use client";

import React, { ReactNode } from "react";
import { AppointmentProvider } from "./AppointmentContext";
;

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppointmentProvider>
      {children}
    </AppointmentProvider>
  );
}
