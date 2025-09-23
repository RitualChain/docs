'use client';

import { cn } from '@/lib/cn';
import { GripHorizontal, GripVertical } from 'lucide-react';
import { type ComponentProps } from 'react';

interface ResizeHandleProps extends ComponentProps<'div'> {
  onMouseDown: () => void;
  isResizing?: boolean;
}

export function ResizeHandle({ 
  onMouseDown, 
  isResizing = false, 
  className, 
  ...props 
}: ResizeHandleProps) {
  return (
    <div
      {...props}
      className={cn(
        'group absolute right-[-4px] top-3/4 h-1/2 bg-transparent',
        'flex items-center justify-center transition-all duration-200',
        // 'hover:bg-fd-border/20',
        // 'cursor-col-resize',
        // isResizing && 'bg-fd-primary/20',
        className
      )}
      // onMouseDown={(e) => {
      //   e.preventDefault();
      //   onMouseDown();
      // }}
    >
      {/* Invisible hover area - wider for easier targeting */}
      {/* <div className="absolute -right-1 -left-1 top-0 h-full" /> */}
      
      {/* Visual resize line */}
      <div
        className={cn(
          // 'absolute right-0 top-0 h-full w-0.5 bg-transparent transition-all duration-200',
          // 'group-hover:bg-fd-border group-hover:shadow-sm',
          // isResizing && 'bg-fd-primary shadow-md'
        )}
      />
      
      {/* Grip indicator - only shows on hover or when resizing */}
      <div
        className={cn(
          'absolute right-[-4px] top-1/2 -translate-y-1/2 h-full justify-center items-center',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
          'hover:bg-fd-background border border-fd-border rounded-sm p-1 shadow-sm',
          // isResizing && 'opacity-100 border-fd-primary'
        )}
        onMouseDown={(e) => {
          e.preventDefault();
          onMouseDown();
        }}
      >
        <GripVertical className="w-3 justify-center items-center text-fd-muted-foreground" />
      </div>
    </div>
  );
}
