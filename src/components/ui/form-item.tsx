"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface FormItemProps {
  value: string;
  label: string;
  icon: LucideIcon;
  checked?: boolean;
  onChange?: (value: string) => void;
}

export function FormItem({ 
  value, 
  label, 
  icon: Icon, 
  checked = false,
  onChange
}: FormItemProps) {
  return (
    <div className="relative">
      <RadioGroupItem 
        id={`service-${value}`} 
        value={value} 
        className="peer absolute opacity-0"
        onChange={() => onChange?.(value)}
      />
      <Label
        htmlFor={`service-${value}`}
        className={cn(
          "flex items-center gap-3 p-4 rounded-xl border border-[#E9FC87]/10 cursor-pointer",
          "transition-all duration-300 hover:bg-[#E9FC87]/5 hover:border-[#E9FC87]/20",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-[#E9FC87]/40",
          "peer-data-[state=checked]:bg-[#E9FC87]/10 peer-data-[state=checked]:border-[#E9FC87]/30"
        )}
      >
        <div className={cn(
          "flex items-center justify-center w-10 h-10 rounded-lg",
          "bg-[#262626]/70 border border-[#E9FC87]/10",
          "transition-colors duration-300",
          "peer-data-[state=checked]:bg-[#E9FC87]/20"
        )}>
          <Icon 
            size={20} 
            className={cn(
              "text-[#F2F2F2]/70 transition-colors duration-300",
              checked && "text-[#E9FC87]"
            )} 
          />
        </div>
        <span className="text-[#F2F2F2] font-medium">{label}</span>
      </Label>
    </div>
  );
}
