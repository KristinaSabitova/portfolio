import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [firstName, ...rest] = config.displayName.split(" ");

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hola, soy
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <h1
                    className={cn(
                      "-ml-[6px] leading-none text-transparent text-slate-800 text-left",
                      "font-bold text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                      "cursor-default text-edge-outline font-display "
                    )}
                  >
                    {firstName}
                    <br />
                    <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                      {rest.join(" ")}
                    </span>
                  </h1>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Seguridad ofensiva · Red Team
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link href="#projects" className="flex-1">
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <p>Ver proyectos</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Link href="#contact">
                    <Button
                      variant={"outline"}
                      className="block w-full overflow-hidden"
                    >
                      Contacto
                    </Button>
                  </Link>
                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={config.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub de Kris"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"} className="gap-2">
                        <SiGithub size={22} />
                        GitHub
                      </Button>
                    </Link>
                    <Link
                      href={`mailto:${config.email}`}
                      aria-label="Enviar correo"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <Mail size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
