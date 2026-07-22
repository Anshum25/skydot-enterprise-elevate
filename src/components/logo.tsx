import * as React from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center shrink-0", className)} aria-label="Skydot Infotech home">
      <img
        src="/Untitled.jpeg"
        alt="Skydot Infotech"
        className="h-11 w-auto max-w-[170px] object-contain"
      />
    </Link>
  );
}
