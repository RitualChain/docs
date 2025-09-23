'use client';

import { useEffect } from 'react';

export function SidebarWidthInitializer() {
  useEffect(() => {
    // Set initial sidebar width if not already set
    const currentWidth = getComputedStyle(document.documentElement).getPropertyValue('--fd-sidebar-width');
    if (!currentWidth || currentWidth.trim() === '') {
      document.documentElement.style.setProperty('--fd-sidebar-width', '264px');
    }
  }, []);

  return null;
}
