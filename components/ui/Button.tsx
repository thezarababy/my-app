import * as React from "react";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {

  const baseStyles = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50";

  const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700";
  const outlineStyles = "border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-50";

  const variantStyles = variant === "primary" ? primaryStyles : outlineStyles;

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props} />
  );
}
