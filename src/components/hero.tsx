import * as React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BarChart3, Users, BookOpen, Award, Bell, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("section-y bg-background", className)}>
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <img src="/moodle_logo_TM.svg" alt="Moodle" className="h-8 w-auto" />
              <span className="px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-semibold">
                Enterprise Moodle Services
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-[1.15] tracking-tight font-display">
              Enterprise Moodle Solutions Built for Modern Learning
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-paragraph leading-relaxed max-w-xl">
              We help universities, government organizations, and enterprises implement, customize, host, and scale secure Moodle platforms with AI-powered learning analytics and seamless ERP integrations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="/contact">Schedule a Demo</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="/services" className="gap-2">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-paragraph">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Enterprise Moodle Experts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-paragraph">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Open Source Specialists</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-paragraph">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Secure & Scalable Solutions</span>
                </div>
              </div>
            </div>

            {/* Optional Small Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                Trusted by Universities
              </span>
              <span className="px-3 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                Open Source
              </span>
              <span className="px-3 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                Enterprise Ready
              </span>
              <span className="px-3 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                AI Powered Learning
              </span>
            </div>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-card border border-border rounded-lg shadow-card overflow-hidden">
              {/* Dashboard Header */}
              <div className="border-b border-border px-6 py-4 bg-muted/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-heading">Learning Management Dashboard</h3>
                    <p className="text-xs text-muted-foreground">Admin Overview</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                      Live
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Total Courses</span>
                    </div>
                    <p className="text-2xl font-bold text-heading">247</p>
                    <p className="text-xs text-muted-foreground mt-1">+12 this month</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Active Users</span>
                    </div>
                    <p className="text-2xl font-bold text-heading">12,847</p>
                    <p className="text-xs text-muted-foreground mt-1">+8.2% growth</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Certificates</span>
                    </div>
                    <p className="text-2xl font-bold text-heading">3,421</p>
                    <p className="text-xs text-muted-foreground mt-1">Issued this year</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Completion Rate</span>
                    </div>
                    <p className="text-2xl font-bold text-heading">87.3%</p>
                    <p className="text-xs text-muted-foreground mt-1">+5.1% increase</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-heading">Recent Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-primary text-xs font-medium">
                        JD
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-heading">John Doe completed "Advanced Moodle Administration"</p>
                        <p className="text-xs text-muted-foreground">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-primary text-xs font-medium">
                        SM
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-heading">Sarah Miller enrolled in "AI Learning Analytics"</p>
                        <p className="text-xs text-muted-foreground">15 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-primary text-xs font-medium">
                        RK
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-heading">Raj Kumar earned "Moodle Expert" certificate</p>
                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                <div className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg border border-border">
                  <Bell className="h-4 w-4 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm text-heading">3 new course enrollments pending approval</p>
                    <p className="text-xs text-muted-foreground">Requires action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
