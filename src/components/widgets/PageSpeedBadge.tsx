'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface PageSpeedBadgeProps {
  url: string;
}

interface PageSpeedResult {
  lighthouseResult?: {
    categories?: {
      performance?: {
        score?: number;
      };
    };
  };
}

export function PageSpeedBadge({ url }: PageSpeedBadgeProps) {
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=AIzaSyDpx7UwJsuC0N7xUpS9lH-JTwTP35LhQoY`
        );
        
        if (!res.ok) {
          throw new Error('Error al obtener PageSpeed');
        }

        const data: PageSpeedResult = await res.json();
        const performanceScore = data.lighthouseResult?.categories?.performance?.score;
        
        if (typeof performanceScore === 'number') {
          setScore(Math.round(performanceScore * 100));
        } else {
          throw new Error('No se pudo obtener el score');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchScore();
  }, [url]);

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="h-6 w-6 animate-pulse rounded-full bg-gray-700" />
        <div className="h-4 w-16 animate-pulse rounded bg-gray-700" />
      </div>
    );
  }

  if (error || score === null) {
    return (
      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
        N/A
      </span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center space-x-1"
    >
      <Zap className={`h-4 w-4 ${
        score >= 90 ? 'text-emerald-500' :
        score >= 50 ? 'text-amber-500' :
        'text-rose-500'
      }`} />
      <span className={`
        rounded-full px-2.5 py-0.5 text-xs font-medium
        ${score >= 90 
          ? 'bg-emerald-500/10 text-emerald-500' 
          : score >= 50
          ? 'bg-amber-500/10 text-amber-500'
          : 'bg-rose-500/10 text-rose-500'
        }
      `}>
        {score}
      </span>
    </motion.div>
  );
}
