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
  // Si fill es true, usamos ese modo optimizado para rendimiento con prioridad de calidad en mobile
  if (fill) {
    return (
      <Image
        src="/msnr.svg"
        alt={alt}
        fill={true}
        priority
        className={className}
        sizes="(max-width: 640px) 85vw, (max-width: 768px) 75vw, (max-width: 1024px) 40vw, 33vw"
        loading="eager"
        fetchPriority="high"
        style={{
          objectFit: 'contain',
          objectPosition: 'center'
        }}
        quality={90}
      />
    );
  }
  
  // Si no, usamos dimensiones explícitas con optimizaciones
  return (
    <Image
      src="/msnr.svg"
      alt={alt}
      width={width || 44}
      height={height || 44}
      className={className}
      priority
      sizes="(max-width: 640px) 44px, (max-width: 1024px) 44px, 44px"
      loading="eager"
      fetchPriority="high"
    />
  );
}
