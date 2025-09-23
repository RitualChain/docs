import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

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
          <Image src="/logo.png" alt="Logo" width={324} height={324} className="size-7 rounded-md"/>
          Ritual Docs
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
