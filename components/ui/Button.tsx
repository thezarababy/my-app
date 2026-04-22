import * as React from "react";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {

  const baseStyles = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50";

  const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700";
  const outlineStyles = "border-2 border-blue-600  font-semibold bg-white hover:bg-blue-600 hover:text-white";

  const variantStyles = variant === "primary" ? primaryStyles : outlineStyles;

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props} />
  );
}
