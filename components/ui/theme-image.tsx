'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ThemeImage({ 
  lightSrc, 
  darkSrc, 
  alt, 
  width, 
  height, 
  className = "" 
}: ThemeImageProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <div 
        className={`${className} bg-primary/10 rounded-full animate-pulse`}
        style={{ width, height }}
      />
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const imageSrc = currentTheme === 'dark' ? darkSrc : lightSrc;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
