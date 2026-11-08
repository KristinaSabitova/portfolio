"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const INTERESTS = [
  "OSINT",
  "Exposición externa",
  "Seguridad web",
  "Seguridad ofensiva",
  "Operaciones de seguridad",
  "Inteligencia de amenazas",
  "Seguridad de IA",
];
const TECH = [
  "Burp Suite",
  "Nmap",
  "Shodan",
  "Metasploit",
  "Wireshark",
  "SQLmap",
  "Kali Linux",
  "Python",
  "FastAPI",
  "Java",
  "JavaScript",
  "React",
  "Docker",
  "nginx",
  "SQL · MySQL · PostgreSQL",
  "Git/GitHub",
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
              Vengo de otro sector profesional y he reorientado mi carrera
              hacia la ciberseguridad. Me he formado en seguridad ofensiva y
              desarrollo web, y desde mayo de 2026 colaboro como freelance en
              proyectos de análisis de exposición externa,
              evaluaciones de seguridad sobre activos autorizados e informes
              para clientes.
            </p>
            <p>
              Desarrollo herramientas propias en Python y FastAPI para OSINT,
              seguridad de IA y auditoría de código, y practico de forma
              continua en Hack The Box, PortSwigger Web Security Academy y
              TryHackMe. Me interesan especialmente las operaciones de
              seguridad y la inteligencia de amenazas.
            </p>
            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <Group title="Áreas de interés" items={INTERESTS} />
              <Group title="Tecnologías y entornos" items={TECH} />
            </div>
            <p>
              Asisto con regularidad a conferencias de seguridad como BitUP
              (Alicante) y Osintomático (Madrid). Idiomas: español y ruso
              nativos, inglés B1.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
