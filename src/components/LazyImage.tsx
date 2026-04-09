import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  fallbackGradient?: string;
}

export const LazyImage = ({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  fallbackGradient = 'from-blue-900/40 to-purple-900/40',
}: LazyImageProps) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatus('loading');
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (status !== 'loading') return;
    const img = new Image();
    img.src = src;
    img.onload = () => setStatus('loaded');
    img.onerror = () => setStatus('error');
  }, [status, src]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Shimmer skeleton */}
      {(status === 'idle' || status === 'loading') && (
        <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.05] to-white/[0.02] ${skeletonClassName}`}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
          </div>
        </div>
      )}

      {/* Error fallback */}
      {status === 'error' && (
        <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} flex items-center justify-center`}>
          <span className="text-4xl opacity-15">📱</span>
        </div>
      )}

      {/* Image */}
      {(status === 'loading' || status === 'loaded') && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-700 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};
