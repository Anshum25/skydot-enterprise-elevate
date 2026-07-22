import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/ai-learning")({
  beforeLoad: () => {
    throw redirect({ to: "/ai-services" });
  },
});
