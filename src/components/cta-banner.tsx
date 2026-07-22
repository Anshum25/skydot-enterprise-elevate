import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export function CTABanner({
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonHref = "#",
  secondaryButtonText,
  secondaryButtonHref,
  className,
}: CTABannerProps) {
  return (
    <section className={cn("bg-accent border-y border-border", className)}>
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-paragraph mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <a href={primaryButtonHref}>{primaryButtonText}</a>
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button asChild variant="secondary" size="lg">
                <a href={secondaryButtonHref}>{secondaryButtonText}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
