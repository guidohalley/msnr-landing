"use client";

import { StarBorder } from "./star-border";
import { motion } from "framer-motion";
import React from "react";

interface ServiceCardWithBorderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function ServiceCardWithBorder({
  title,
  description,
  icon,
  onClick,
}: ServiceCardWithBorderProps) {
  return (
    <StarBorder 
      active={true}
      size="md"
      className="w-full cursor-pointer"
    >
      <motion.div
        className="flex flex-col items-center p-4 text-center bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white rounded-lg"
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
