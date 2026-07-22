import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  description: string;
  date?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-0 top-0 h-full w-px bg-border" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background" />
            {item.date && (
              <p className="text-sm font-medium text-primary mb-1">{item.date}</p>
            )}
            <h3 className="text-lg font-semibold text-heading mb-2">{item.title}</h3>
            <p className="text-base text-paragraph leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
