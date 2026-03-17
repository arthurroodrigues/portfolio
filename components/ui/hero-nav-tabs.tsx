"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Home, Mail, Projector, Sparkles, User } from "lucide-react";

const navItems = [
  { title: "Skills", icon: Sparkles, targetId: "skills" },
  { title: "Projetos", icon: Projector, targetId: "projetos" },
  { title: "Home", icon: Home, targetId: "home" },
  { title: "Sobre mim", icon: User, targetId: "sobre" },
  { title: "Contato", icon: Mail, targetId: "contato" },
];

export default function HeroNavTabs() {
  const handleChange = (index: number | null) => {
    if (index === null) return;
    const targetId = navItems[index]?.targetId;
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        ["--color-foreground" as any]: "#f8fafc",
        ["--color-muted-foreground" as any]: "rgba(255, 255, 255, 0.7)",
        ["--color-muted" as any]: "rgba(255, 255, 255, 0.12)",
        ["--color-border" as any]: "rgba(255, 255, 255, 0.2)",
      }}
    >
      <ExpandableTabs
        tabs={navItems.map(({ title, icon }) => ({ title, icon }))}
        activeColor="text-red-300"
        className="border-red-500/30 bg-black/70"
        onChange={handleChange}
      />
    </div>
  );
}

