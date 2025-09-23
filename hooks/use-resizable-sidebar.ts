'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseResizableSidebarOptions {
  minWidth?: number;
  maxWidth?: number;
  defaultWidth?: number;
  storageKey?: string;
}

export function useResizableSidebar({
  minWidth = 196,
  maxWidth = 480,
  defaultWidth = 264,
  storageKey = 'sidebar-width',
}: UseResizableSidebarOptions = {}) {
  const [width, setWidth] = useState(defaultWidth);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  // Load width from localStorage on mount
  useEffect(() => {
    const savedWidth = localStorage.getItem(storageKey);
    if (savedWidth) {
      const parsedWidth = parseInt(savedWidth, 10);
      if (parsedWidth >= minWidth && parsedWidth <= maxWidth) {
        setWidth(parsedWidth);
      }
    }
  }, [minWidth, maxWidth, storageKey]);

  // Save width to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(storageKey, width.toString());
    // Update CSS variable
    document.documentElement.style.setProperty('--fd-sidebar-width', `${width}px`);
  }, [width, storageKey]);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing && sidebarRef.current) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const newWidth = mouseMoveEvent.clientX - sidebarRect.left;
        
        if (newWidth >= minWidth && newWidth <= maxWidth) {
          setWidth(newWidth);
        }
      }
    },
    [isResizing, minWidth, maxWidth]
  );

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResizing);
      document.body.classList.add('resizing');

      return () => {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResizing);
        document.body.classList.remove('resizing');
      };
    }
  }, [isResizing, resize, stopResizing]);

  return {
    width,
    isResizing,
    sidebarRef,
    startResizing,
    minWidth,
    maxWidth,
  };
}
