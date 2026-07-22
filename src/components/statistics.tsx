import * as React from "react";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  description?: string;
}

interface StatisticsProps {
  items: StatItem[];
  className?: string;
}

export function Statistics({ items, className }: StatisticsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", className)}>
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.value}</p>
          <p className="text-lg font-semibold text-heading mb-1">{item.label}</p>
          {item.description && (
            <p className="text-sm text-paragraph">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
