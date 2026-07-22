import * as React from "react";
import { GraduationCap, Building2, Heart, Factory, Briefcase, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBarProps {
  className?: string;
}

const industries = [
  { name: "Universities", icon: GraduationCap },
  { name: "Government", icon: Building2 },
  { name: "Healthcare", icon: Heart },
  { name: "Manufacturing", icon: Factory },
  { name: "Corporate", icon: Briefcase },
  { name: "Training Institutes", icon: BookOpen },
];

export function TrustBar({ className }: TrustBarProps) {
  return (
    <section className={cn("border-y border-border bg-muted/30 py-12", className)}>
      <div className="container-page">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted Across Industries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center justify-center gap-3 text-center group"
            >
              <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <industry.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-heading group-hover:text-primary transition-colors">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
