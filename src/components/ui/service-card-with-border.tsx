"use client";

import { StarBorder } from "./star-border";
import { motion } from "framer-motion";
import React from "react";

interface ServiceCardWithBorderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "subtle" | "default";
}

export function ServiceCardWithBorder({
  title,
  description,
  icon,
  onClick,
  variant = "subtle",
}: ServiceCardWithBorderProps) {
  return (
    <StarBorder 
      as="div" 
      className="w-full cursor-pointer"
      color="#E9FC87"
      hoverColor="#FFFFFF"
      thickness={1}
      variant={variant}
    >
      <motion.div
        className="flex flex-col items-center p-4 text-center"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {icon && (
          <div className="mb-4 text-4xl text-accent">{icon}</div>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </motion.div>
    </StarBorder>
  );
}
