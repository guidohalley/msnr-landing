import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error"]
    } : false,
  },
  experimental: {
    // Desactivando optimizeCss temporalmente para resolver problemas de build
    optimizeCss: false,
  },
  images: {
    formats: ["image/avif", "image/webp"]
  },
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones solo para el build de producción (no para desarrollo)
    if (!dev && !isServer) {
      // Evitar polyfills innecesarios
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        module: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;
