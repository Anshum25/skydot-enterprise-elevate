import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
}

export function CustomTabs({ items, defaultValue, className }: CustomTabsProps) {
  return (
    <Tabs defaultValue={defaultValue || items[0]?.value} className={cn("w-full", className)}>
      <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-muted/50 p-1 rounded-lg">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-6">
        {items.map((item) => (
          <TabsContent key={item.value} value={item.value} className="mt-0">
            {item.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
