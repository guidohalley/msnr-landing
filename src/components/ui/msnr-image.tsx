'use client';

import Image from 'next/image';

interface MsnrImageProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  fill?: boolean;
}

export default function MsnrImage({ 
  width, 
  height, 
  className = '', 
  alt = "Logo Misionary",
  fill = false
}: MsnrImageProps) {
  // Si fill es true, usamos ese modo pero con dimensiones explícitas
  if (fill) {
    return (
      <Image
        src="/msnr.svg"
        alt={alt}
        fill={true}
        priority
        className={className}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    );
  }
  
  // Si no, usamos dimensiones explícitas
  return (
    <Image
      src="/msnr.svg"
      alt={alt}
      width={width || 44}
      height={height || 44}
      className={className}
      priority
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}
