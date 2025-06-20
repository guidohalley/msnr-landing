'use client';

import { useEffect, useState } from 'react';
import { onCLS, onLCP, onINP } from 'web-vitals';
import { motion } from 'framer-motion';
import { Gauge, Info } from 'lucide-react';

interface Metric {
  value: number;
  target: number;
  label: string;
  name: string;
  description: string;
  longDescription: string;
}

interface WebVitalProps extends Metric {
  value: number;
}

const WebVitalCard = ({ name, value, target, label, description, longDescription }: WebVitalProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const score = value <= target ? 'good' : value <= target * 1.5 ? 'needs-improvement' : 'poor';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        relative overflow-hidden rounded-lg border p-4
        ${score === 'good' 
          ? 'border-emerald-500/20 bg-emerald-500/10' 
          : score === 'needs-improvement'
          ? 'border-amber-500/20 bg-amber-500/10'
          : 'border-rose-500/20 bg-rose-500/10'
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-black/10 p-2 dark:bg-white/10">
            <Gauge className={`h-5 w-5 
              ${score === 'good' 
                ? 'text-emerald-500' 
                : score === 'needs-improvement'
                ? 'text-amber-500'
                : 'text-rose-500'
              }`} 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {label}
              </h3>
              <button
                type="button"
                className="group relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(!showTooltip)}
              >
                <Info className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#E2FF3F]" />
                {showTooltip && (
                  <div className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-lg dark:border-zinc-800 dark:bg-black">
                    <p className="font-medium text-gray-900 dark:text-white">{name}</p>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">{longDescription}</p>
                  </div>
                )}
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <p className="text-2xl font-semibold tracking-tight">
          {value.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          / {target} {name === 'CLS' ? '' : 'ms'}
        </p>
      </div>
    </motion.div>
  );
};

export function WebVitals() {
  const [metrics, setMetrics] = useState<Record<string, Metric>>({
    LCP: {
      value: 0,
      target: 2500,
      label: 'Tiempo de Carga',
      name: 'LCP',
      description: 'Tiempo hasta ver el contenido principal',
      longDescription: 'Largest Contentful Paint (LCP) mide cuánto tiempo tarda en cargarse el contenido más grande visible en la pantalla. Es crucial para la primera impresión del usuario. Un buen LCP debe ser menor a 2.5 segundos.'
    },
    INP: {
      value: 0,
      target: 200,
      label: 'Interactividad',
      name: 'INP',
      description: 'Respuesta a interacciones del usuario',
      longDescription: 'Interaction to Next Paint (INP) mide qué tan rápido responde el sitio cuando un usuario interactúa con él (clicks, taps, etc). Una buena experiencia debe tener un INP menor a 200 milisegundos.'
    },
    CLS: {
      value: 0,
      target: 0.1,
      label: 'Estabilidad Visual',
      name: 'CLS',
      description: 'Cambios inesperados en el diseño',
      longDescription: 'Cumulative Layout Shift (CLS) mide la estabilidad visual de la página, es decir, cuánto se mueven los elementos mientras carga. Un buen CLS debe ser menor a 0.1, donde 0 significa que no hay movimientos inesperados.'
    }
  });

  useEffect(() => {
    onLCP(({ value }) => {
      setMetrics(m => ({
        ...m,
        LCP: { ...m.LCP, value }
      }));
    });

    onINP(({ value }) => {
      setMetrics(m => ({
        ...m,
        INP: { ...m.INP, value }
      }));
    });

    onCLS(({ value }) => {
      setMetrics(m => ({
        ...m,
        CLS: { ...m.CLS, value }
      }));
    });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Métricas de Rendimiento
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Mediciones en tiempo real
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(metrics).map(([key, metric]) => (
          <WebVitalCard 
            key={key}
            {...metric}
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        * Estas métricas se actualizan en tiempo real y muestran el rendimiento actual de la página. 
        Pasa el cursor sobre el ícono ℹ️ para más detalles.
      </p>
    </div>
  );
}
