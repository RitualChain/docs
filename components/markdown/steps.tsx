import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Steps({ children }: { children: ReactNode }) {
  return <div className="fd-steps fd-steps-container">{children}</div>;
}

interface StepProps {
  className?: string;
  title: string;
  content: ReactNode;
}

export function Step({ title, className, content }: StepProps) {
  return <div className={cn('fd-step', className)}>
    <h3 className="fd-step-title">{title}</h3>
    {content}
  </div>;
}
