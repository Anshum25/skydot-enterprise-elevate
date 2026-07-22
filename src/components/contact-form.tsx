import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
  onSubmit?: (data: { name: string; email: string; subject: string; message: string }) => void;
}

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-heading font-medium">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-heading font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="border-border"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-heading font-medium">
          Subject
        </Label>
        <Input
          id="subject"
          placeholder="How can we help?"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
          className="border-border"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-heading font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us more about your project..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
          className="border-border resize-none"
        />
      </div>
      <Button type="submit" className="w-full md:w-auto">
        Send Message
      </Button>
    </form>
  );
}
