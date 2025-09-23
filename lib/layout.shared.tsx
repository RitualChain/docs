import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ThemeLogo } from '@/components/ui/theme-logo';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {  
      title: (
        <div className="flex items-center gap-2 text-base font-semibold rounded-md w-full py-1">
          <ThemeLogo width={1800} height={1200} className="rounded-md w-fit h-fit" />
          {/* Ritual Docs */}
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
