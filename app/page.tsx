import { ShaderAnimation } from "@/components/ui/shader-animation";
import TeamMemberCard from "@/components/ui/team-member-card";
import SkillsOrbit from "@/components/ui/skills-orbit";
import HeroNavTabs from "@/components/ui/hero-nav-tabs";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { BackgroundPaths } from "@/components/ui/background-paths";

const projectItems: CardStackItem[] = [
  {
    id: 1,
    title: "BemPerto",
    description:
      "Sistema completo de monitoramento de presença via RFID para instituições de ensino, composto por hardware Arduino e backend Python.",
    imageSrc: "/bemperto.png",
    imageFit: "contain",
    imageBgClass: "bg-[#0b4bd4]",
    showOverlay: false,
    href: "https://github.com/arthurroodrigues",
  },
  {
    id: 2,
    title: "GymTrack",
    description:
      "O GymTrack é uma aplicação web desenvolvida para auxiliar praticantes de academia a organizarem, registrarem e acompanharem seus treinos de forma estruturada e eficiente.",
    imageSrc: "/gymtrack.png",
    href: "https://github.com/arthurroodrigues",
  },
  {
    id: 3,
    title: "NextGym",
    description:
      "Site institucional e funcional de uma academia fictícia, desenvolvido com foco em usabilidade, prevenção de erros e feedback ao usuário.",
    imageSrc: "/nextgym.png",
    href: "https://github.com/arthurroodrigues",
  },
  {
    id: 4,
    title: "Pulse Mobile",
    description: "Design mobile com foco em fluidez e retenção.",
    imageSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/arthurroodrigues",
  },
  {
    id: 5,
    title: "Aurora Labs",
    description: "Protótipos rápidos para validar ideias com velocidade.",
    imageSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/arthurroodrigues",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
        <HeroNavTabs />
      </div>

      <section id="home" className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0">
          <ShaderAnimation />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-svh items-center justify-center px-6">
          <div className="max-w-2xl text-center translate-y-8">
            <h1 className="text-5xl md:text-7xl font-semibold text-red-500">
              Arthur Rodrigues
            </h1>
            <p className="mt-6 text-lg md:text-xl text-red-100/90">
              Desenvolvedor focado em experiências digitais elegantes, performance e interfaces que
              contam histórias.
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-20">
          <TeamMemberCard
            position="left"
            jobPosition="Desenvolvedor Full Stack"
            firstName="Arthur"
            lastName="Rodrigues"
            imageUrl="/eu.jpeg"
            description="Desenvolvedor apaixonado por experiências digitais modernas, com foco em interfaces elegantes, performance e animações que contam histórias."
          />
        </div>
      </section>

      <section id="skills" className="relative">
        <div className="pointer-events-none absolute left-1/2 top-10 z-10 -translate-x-1/2 text-3xl md:text-4xl font-semibold text-red-200">
          Skills
        </div>
        <SkillsOrbit />
      </section>

      <section id="projetos" className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-red-200">Projetos</h2>
            <p className="mt-4 text-lg text-red-100/80">
              Alguns projetos que mostram minha assinatura visual e técnica.
            </p>
          </div>
          <div className="mt-10">
            <CardStack
              items={projectItems}
              initialIndex={0}
              autoAdvance
              intervalMs={2200}
              pauseOnHover
              showDots
            />
          </div>
        </div>
      </section>

      <section id="contato" className="relative">
        <BackgroundPaths title="Vamos conversar?" buttonLabel="Conecte-se" buttonHref="https://w.app/wkt1dq" />
      </section>
    </main>
  );
}



