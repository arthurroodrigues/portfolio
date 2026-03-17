"use client";

import { useEffect, useState } from "react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Code, Cpu, Database, Layout, Sparkles } from "lucide-react";

const skillsData = [
  {
    id: 1,
    title: "Frontend",
    date: "React • Next.js",
    content: "Interfaces performáticas, animações e arquitetura de componentes.",
    category: "Frontend",
    icon: Layout,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 2,
    title: "Backend",
    date: "Node • APIs",
    content: "APIs robustas, integrações e boas práticas de engenharia.",
    category: "Backend",
    icon: Code,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 3,
    title: "Banco de Dados",
    date: "Postgres • Prisma",
    content: "Modelagem, performance e consistência para produtos escaláveis.",
    category: "Database",
    icon: Database,
    relatedIds: [1, 5],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 4,
    title: "Infra & DevOps",
    date: "CI/CD • Cloud",
    content: "Pipelines, deploys confiáveis e monitoramento essencial.",
    category: "Infra",
    icon: Cpu,
    relatedIds: [2],
    status: "in-progress" as const,
    energy: 62,
  },
  {
    id: 5,
    title: "Criatividade",
    date: "Motion • Storytelling",
    content: "Narrativas visuais e experiências que geram impacto.",
    category: "Creative",
    icon: Sparkles,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
];

export default function SkillsOrbit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <RadialOrbitalTimeline timelineData={skillsData} />;
}
