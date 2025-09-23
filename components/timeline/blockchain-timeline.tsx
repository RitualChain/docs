'use client';

import { cn } from '@/lib/cn';
import Image from 'next/image';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icons: string[];
  pros: string[];
  cons: string[];
}

interface BlockchainTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function BlockchainTimeline({ items, className }: BlockchainTimelineProps) {
  return (
    <div className={cn("space-y-16", className)}>
      {items.map((item, index) => (
        <div key={item.year} className="relative">
          {/* Timeline connector line */}
          {index < items.length - 1 && (
            <div className="absolute left-8 top-32 w-px h-16 bg-border opacity-30" />
          )}
          
          <div className="flex flex-col space-y-6">
            {/* Year */}
            <div className="text-2xl font-bold text-primary">
              {item.year}
            </div>
            
            {/* Icon cluster */}
            <div className="flex space-x-2">
              {item.icons.map((icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className="w-fit h-8 rounded-full bg-background flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={icon}
                    alt="Timeline Icon"
                    width={720}
                    height={720}
                    className="w-fit h-8 object-cover dark:brightness-90 dark:contrast-110"
                  />
                </div>
              ))}
            </div>
            
            {/* Title and description */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
                {item.description}
              </p>
            </div>
            
            {/* Pros and cons box */}
            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm max-w-4xl">
              <div className="space-y-4">
                {/* Pros */}
                {item.pros.map((pro, proIndex) => (
                  <div key={proIndex} className="flex items-start space-x-3">
                    <div className="text-green-500 font-bold text-lg mt-0.5">+</div>
                    <div className="text-foreground">
                      <span className="font-semibold">{pro.split(' ')[0]} {pro.split(' ')[1]}</span>
                      <span className="text-muted-foreground"> {pro.split(' ').slice(2).join(' ')}</span>
                    </div>
                  </div>
                ))}
                
                {/* Cons */}
                {item.cons.map((con, conIndex) => (
                  <div key={conIndex} className="flex items-start space-x-3">
                    <div className="text-red-500 font-bold text-lg mt-0.5">−</div>
                    <div className="text-foreground">
                      <span className="font-semibold">{con.split(' ')[0]} {con.split(' ')[1]} {con.split(' ')[2]}</span>
                      <span className="text-muted-foreground"> {con.split(' ').slice(3).join(' ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
