'use client';
import {
  type ReactNode,
  type RefObject,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import { createContext, usePathname } from 'fumadocs-core/framework';
import { useOnChange } from 'fumadocs-core/utils/use-on-change';

interface SidebarContext {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * When set to false, don't close the sidebar when navigate to another page
   */
  closeOnRedirect: RefObject<boolean>;
}

const SidebarContext = createContext<SidebarContext>('SidebarContext');

export function useSidebar(): SidebarContext {
  return SidebarContext.use();
}

export function SidebarProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const closeOnRedirect = useRef(true);
  const [open, setOpen] = useState(false);
  // Default sidebar to collapsed on mobile, expanded on desktop
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false; // Default for SSR
  });

  const pathname = usePathname();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setCollapsed(true);
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useOnChange(pathname, () => {
    if (closeOnRedirect.current) {
      setOpen(false);
    }
    closeOnRedirect.current = true;
  });

  return (
    <SidebarContext.Provider
      value={useMemo(
        () => ({
          open,
          setOpen,
          collapsed,
          setCollapsed,
          closeOnRedirect,
        }),
        [open, collapsed],
      )}
    >
      {children}
    </SidebarContext.Provider>
  );
}