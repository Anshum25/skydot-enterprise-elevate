import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Puzzle, Palette, GitBranch, Container, ShieldCheck, KeyRound, Database, Search, TestTube, Github, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/moodle-development")({
  head: () => ({
    meta: [
      { title: "Moodle Development — Plugins, themes, integrations & DevOps | Skydot" },
      { name: "description", content: "Enterprise Moodle engineering: plugin & theme development, web services, SSO, LDAP, OAuth, Docker, Redis, ElasticSearch, CI/CD and testing." },
      { property: "og:title", content: "Moodle Development — Skydot Infotech" },
      { property: "og:description", content: "Deep Moodle engineering for enterprise-scale learning platforms." },
    ],
    links: [{ rel: "canonical", href: "/moodle-development" }],
  }),
  component: MoodlePage,
});

const CAPS = [
  { icon: Puzzle, title: "Plugin Development", desc: "Custom blocks, activities, reports and admin tools engineered to Moodle standards." },
  { icon: Palette, title: "Theme Development", desc: "Accessible, on-brand themes for Moodle & Moodle Workplace, built for performance." },
  { icon: Database, title: "API & Web Services", desc: "External services, REST/GraphQL wrappers, event-driven integrations." },
  { icon: KeyRound, title: "Authentication", desc: "SSO with SAML, OIDC and OAuth 2.0. LDAP and Active Directory integrations." },
  { icon: Container, title: "Docker Deployment", desc: "Container-native Moodle images with reproducible builds and secrets management." },
  { icon: Search, title: "Redis & Elastic", desc: "Cache tiers, session stores and global search powered by Redis and Elasticsearch." },
  { icon: GitBranch, title: "CI/CD & GitHub", desc: "GitHub Actions pipelines, plugin unit tests, code review and automated deploys." },
  { icon: TestTube, title: "Testing", desc: "PHPUnit, Behat and load testing baked into every release train." },
];

function MoodlePage() {
  return (
    <div>
      <PageHero
        eyebrow="Moodle Engineering"
        title={<>The Moodle center of excellence your enterprise deserves.</>}
        description="A dedicated Moodle practice of 60+ engineers, plugin authors and LMS architects — building, extending and operating Moodle for the most demanding organizations."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Discuss your Moodle roadmap <ArrowRight className="ml-2 size-4" /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/services">All engineering services</Link></Button>
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPS.map(c => (
              <Card key={c.title} className="p-6 border-border bg-card card-hover">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><c.icon className="size-5" /></div>
                <div className="mt-4 font-display font-semibold text-heading">{c.title}</div>
                <p className="mt-2 text-sm text-paragraph leading-relaxed">{c.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Reference architecture" title="Container-native Moodle, engineered for scale and DR." description="A modern, opinionated architecture — Kubernetes-orchestrated, observability-first, and portable across public and private clouds." />
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Immutable Moodle images built via GitHub Actions",
                "Kubernetes with HPA & PDBs; blue/green deploys",
                "PostgreSQL / MariaDB with read replicas",
                "Redis for sessions, cache and MUC",
                "Elasticsearch for global search and analytics",
                "Prometheus + Grafana observability, Loki logs",
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-heading"><span className="mt-2 size-1.5 rounded-full bg-primary" />{t}</li>
              ))}
            </ul>
          </div>
          <Card className="p-2 bg-card border-border shadow-elevated">
            <pre className="rounded-lg bg-[#0B1220] text-[#CBD5E1] p-5 text-xs leading-relaxed overflow-auto"><code>{`# skydot/moodle · production overlay
apiVersion: apps/v1
kind: Deployment
metadata:
  name: moodle-web
spec:
  replicas: 12
  strategy:
    type: RollingUpdate
  template:
    spec:
      containers:
        - name: moodle
          image: registry.skydot.cloud/moodle:4.4.2-lts
          envFrom:
            - secretRef: { name: moodle-secrets }
          resources:
            requests: { cpu: 500m, memory: 1Gi }
            limits:   { cpu: "2",  memory: 3Gi }
          livenessProbe:
            httpGet: { path: /healthz, port: 8080 }`}</code></pre>
          </Card>
        </div>
      </section>
    </div>
  );
}
