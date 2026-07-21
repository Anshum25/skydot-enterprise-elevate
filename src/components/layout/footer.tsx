import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Youtube, Mail, Phone, MapPin } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: [
      ["Moodle Consulting", "/services"],
      ["Implementation", "/services"],
      ["Managed Hosting", "/services"],
      ["Customization", "/services"],
      ["Plugin Development", "/moodle-development"],
      ["Migration", "/services"],
    ],
  },
  {
    title: "Products",
    links: [
      ["CBT Platform", "/cbt"],
      ["AI Tutor", "/ai-services"],
      ["Learning Analytics", "/ai-services"],
      ["AI Proctoring", "/cbt"],
      ["White-label LMS", "/services"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Universities", "/solutions"],
      ["Government", "/solutions"],
      ["Corporate Learning", "/solutions"],
      ["Healthcare", "/solutions"],
      ["Banking", "/solutions"],
      ["Manufacturing", "/solutions"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Case Studies", "/case-studies"],
      ["Blog", "/blog"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">
                S
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-lg text-heading">Skydot Infotech</div>
                <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Enterprise Moodle & AI Solutions
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              We build enterprise learning ecosystems for universities, governments and Fortune-class
              organizations — combining Moodle expertise, custom platform engineering and applied AI.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5"><Mail className="size-4 text-primary" /> hello@skydotinfotech.com</div>
              <div className="flex items-center gap-2.5"><Phone className="size-4 text-primary" /> +91 80 4567 8900</div>
              <div className="flex items-center gap-2.5"><MapPin className="size-4 text-primary" /> Bengaluru · Dubai · London</div>
            </div>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Twitter, Github, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-9 place-items-center rounded-full border border-border bg-background hover:border-primary hover:text-primary transition"
                  aria-label="social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="font-display font-semibold text-heading text-sm mb-4">{c.title}</div>
                <ul className="space-y-2.5">
                  {c.links.map(([label, to]) => (
                    <li key={label}>
                      <Link to={to} className="text-sm text-paragraph hover:text-primary transition">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Skydot Infotech Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Security</a>
            <a href="#" className="hover:text-primary">ISO 27001</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
