"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const INTERESTS = [
  "Offensive Security",
  "Web Security",
  "Pentesting",
  "SOC",
  "Vulnerability Assessment",
  "Ethical Hacking",
];
const TECH = [
  "Linux",
  "Kali Linux",
  "Burp Suite",
  "Virtualización",
  "Git/GitHub",
  "Java",
  "JavaScript",
  "SQL",
  "HTML/CSS",
];

const Group = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-3">
    <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge
          key={item}
          variant="secondary"
          className="font-mono text-xs font-normal"
        >
          {item}
        </Badge>
      ))}
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-24"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="Sobre mí"
          className="mb-12 md:mb-16 mt-0"
        />
        <Card className="bg-white/80 dark:bg-black/75 backdrop-blur-md border-border">
          <CardContent className="space-y-6 p-6 md:p-10 text-base leading-relaxed text-muted-foreground">
            <p className="text-xl md:text-2xl font-display text-foreground leading-snug">
              La ciberseguridad fue un cambio de rumbo, pero la curiosidad por
              entender cómo funcionan las cosas fue el punto de partida.
            </p>
            <p>
              Actualmente estoy construyendo mi carrera profesional en
              ciberseguridad, desarrollando una base sólida en sistemas, redes,
              desarrollo web y análisis de vulnerabilidades. Estoy cursando el
              Máster en Ciberseguridad e IA, con formación práctica en hacking
              ético, análisis de redes, explotación de vulnerabilidades,
              técnicas de pivoting y movimiento lateral, escalada de
              privilegios, seguridad web y elaboración de evidencias e informes
              técnicos.
            </p>
            <p>
              Paralelamente, estoy cursando Desarrollo de Aplicaciones Web
              (DAW), reforzando mi perfil técnico mediante programación,
              desarrollo web, bases de datos y tecnologías como Java,
              JavaScript, HTML, CSS, MySQL y PostgreSQL. Mi aprendizaje no se
              queda únicamente en la teoría: trabajo con laboratorios
              prácticos, entornos virtualizados y plataformas de entrenamiento
              en ciberseguridad, poniendo en práctica metodologías de
              reconocimiento, explotación y análisis de vulnerabilidades.
            </p>
            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <Group title="Áreas de interés" items={INTERESTS} />
              <Group title="Tecnologías y entornos" items={TECH} />
            </div>
            <p>
              Actualmente busco mi primera oportunidad profesional en
              ciberseguridad, especialmente en posiciones Junior SOC /
              Cybersecurity, donde pueda aportar desde el primer día, seguir
              desarrollando fundamentos sólidos y evolucionar progresivamente
              hacia Red Team.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
