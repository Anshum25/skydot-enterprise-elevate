import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

interface TestimonialsProps {
  items: TestimonialItem[];
  className?: string;
}

export function Testimonials({ items, className }: TestimonialsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, index) => (
        <Card key={index} className="h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex-1">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-primary"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-paragraph leading-relaxed mb-6">
                {item.content}
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary font-semibold">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-heading text-sm">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.role}, {item.company}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
