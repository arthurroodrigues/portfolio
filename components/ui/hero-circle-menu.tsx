"use client";

import { CircleMenu } from "@/components/ui/circle-menu";
import { Home, Mail, Projector, Sparkles, User } from "lucide-react";

const items = [
  { label: "Skills", icon: <Sparkles size={16} />, href: "#skills" },
  { label: "Projects", icon: <Projector size={16} />, href: "#projetos" },
  { label: "Home", icon: <Home size={16} />, href: "#home" },
  { label: "Sobre mim", icon: <User size={16} />, href: "#sobre" },
  { label: "Contato", icon: <Mail size={16} />, href: "#contato" },
];

export default function HeroCircleMenu() {
  return <CircleMenu items={items} />;
}
