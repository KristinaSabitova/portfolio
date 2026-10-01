"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader
        id="contact"
        className="relative mb-14"
        title={
          <>
            HABLEMOS
          </>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Escríbeme</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Busco mi primera oportunidad profesional en ciberseguridad,
              especialmente en posiciones Junior SOC / Cybersecurity, con la
              mirada puesta en evolucionar hacia Red Team. Escríbeme por donde
              te vaya mejor.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="font-mono text-sm text-muted-foreground">
              {config.email}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${config.email}`} className="cursor-can-hover">
                <Button className="gap-2">
                  <Mail size={18} />
                  Enviar correo
                </Button>
              </a>
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-can-hover"
              >
                <Button variant="outline" className="gap-2">
                  <SiGithub size={18} />
                  GitHub
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
