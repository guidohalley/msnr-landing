"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", size = "default", isLoading = false, ...props }, ref) => {
    const variants = {
      primary: "bg-[#E9FC87] hover:bg-[#DDED7E] text-black font-medium shadow-lg shadow-[#E9FC87]/10",
      secondary: "bg-[#111]/80 hover:bg-[#222] text-[#F2F2F2] border border-[#E9FC87]/20 hover:border-[#E9FC87]/30",
      outline: "bg-transparent hover:bg-[#E9FC87]/5 text-[#E9FC87] border border-[#E9FC87]/50 hover:border-[#E9FC87]",
    };

    const sizes = {
      default: "h-12 px-6 py-3 rounded-xl text-sm",
      sm: "h-10 px-4 py-2 rounded-lg text-xs",
      lg: "h-14 px-8 py-4 rounded-xl text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9FC87]/40",
          "disabled:pointer-events-none disabled:opacity-50",
          "hover:scale-[1.03] active:scale-[0.98] transition-transform",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span className={cn(isLoading && "invisible")}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
