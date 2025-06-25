"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/whatsapp";
import { getSpecialistByService } from "@/data/specialists";
import { StarBorder } from "@/components/ui/star-border";

export type ProfileImageType = "initials" | "avatar";

type ProfileCardProps = {
  service: Service;
  className?: string;
  animate?: boolean;
  imageType?: ProfileImageType;
  showExtraDetails?: boolean;
  specialistIndex?: number;
  onClick?: () => void;
};

export function ProfileCard({ 
  service, 
  className, 
  animate = true,
  imageType = "initials",
  showExtraDetails = false,
  specialistIndex = 0,
  onClick
}: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const specialists = getSpecialistByService(service);
  const specialist = specialists[specialistIndex] || specialists[0];

  return (
    <StarBorder active={isHovered} size="md">
      <motion.div
        initial={animate ? { opacity: 0, y: 10 } : false}
        animate={animate ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.3 }}
        className={cn(
          "p-3 bg-[#262626]/50 border border-[#E9FC87]/10 rounded-xl backdrop-blur-sm",
          "hover:border-[#E9FC87]/20 transition-all duration-300",
          onClick && "cursor-pointer",
          className
        )}
        data-specialist-id={specialist.id}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div className="flex items-center gap-3">
        <motion.div 
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            boxShadow: isHovered ? "0 0 15px rgba(233, 252, 135, 0.2)" : "0 0 0 rgba(233, 252, 135, 0)",
          }}
          className={cn(
            "relative w-12 h-12 rounded-full overflow-hidden",
            "bg-gradient-to-br border border-[#E9FC87]/30",
            specialist.colorGradient
          )}
        >
          {imageType === "avatar" && !imageError && (
            <motion.img
              src={`/team/${specialist.id}.jpg`}
              alt={specialist.name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
          
          {/* Fallback o initials elegido */}
          {(imageType === "initials" || imageError) && (
            <div className="absolute inset-0 flex items-center justify-center text-[#E9FC87] font-bold">
              {specialist.initials}
            </div>
          )}
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-[#F2F2F2]">
            {specialist.name}
          </div>
          <div className="text-xs text-[#E9FC87]">
            {specialist.role}
          </div>
          <motion.div 
            className="text-xs text-[#F2F2F2]/60 mt-1 truncate"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {specialist.message}
          </motion.div>
          
          {showExtraDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
              className="text-xs text-[#F2F2F2]/40 mt-2 overflow-hidden"
            >
              <span className="block">{specialist.title}</span>
              <span className="block mt-1 text-[10px]">Te ayudará con tu proyecto</span>
            </motion.div>
          )}
        </div>

        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-[#E9FC87] rounded-full"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[#262626] text-[10px] font-bold">
              +
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
    </StarBorder>
  );
}
