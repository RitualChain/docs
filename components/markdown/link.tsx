import NextLink from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface MarkdownLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function MarkdownLink({ href, className, children }: MarkdownLinkProps) {
  return (
    <NextLink 
        href={href} 
        className={cn("no-underline", className)}
        target={(href ?? '').startsWith("http") ? "_blank" : "_self"}
        rel={(href ?? '').startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </NextLink>
  );
}