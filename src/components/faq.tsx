import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  return (
    <div className={cn("max-w-3xl mx-auto", className)}>
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg bg-card shadow-card"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-accent/50 transition-colors">
              <span className="text-base font-semibold text-heading">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-base text-paragraph leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
