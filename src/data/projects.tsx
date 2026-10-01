import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import SHOTS from "./screenshots.json";
import { config } from "./config";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { asset } from "@/lib/asset";

// Marca en SVG monocromo desde /public: hereda el color del texto (currentColor).
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${asset(src)})`,
      maskImage: `url(${asset(src)})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

type RepoLink = { label: string; url: string };

const ProjectsLinks = ({
  live,
  repos,
}: {
  live?: string;
  repos?: RepoLink[];
}) => {
  const hasLive = !!live && live !== "#";
  if (!hasLive && !(repos && repos.length)) return null;
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-start gap-3 my-3 mb-8">
      {hasLive && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={live!}
        >
          <Button variant={"default"} size={"sm"}>
            Probar demo
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {(repos || []).map((r) => (
        <Link
          key={r.url}
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={r.url}
        >
          <Button variant={"outline"} size={"sm"}>
            {r.label}
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      ))}
    </div>
  );
};

const DemoAccess = ({ id }: { id: "spectra" | "domini" }) => {
  const acc = config.demoAccounts[id];
  if (!acc.user || !acc.password) return null;
  return (
    <div className="font-mono text-sm rounded-lg border border-border bg-secondary/30 p-4 mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        Cuenta de demo (acceso limitado)
      </p>
      <p>usuario: <strong>{acc.user}</strong></p>
      <p>contraseña: <strong>{acc.password}</strong></p>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const mark = (title: string, text: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[10px] font-bold leading-none">{text}</span>,
});
const PROJECT_SKILLS = {
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  react: brand("React", "react-mono.svg"),
  fastapi: mark("FastAPI", "API"),
  llm: mark("Backends LLM", "LLM"),
  nginx: mark("nginx", "NGX"),
  sqlite: mark("SQLite", "SQL"),
  qt: mark("PySide6 (Qt)", "Qt"),
  dns: mark("DNS", "DNS"),
  cli: mark("CLI", ">_"),
  ts: mark("TypeScript", "TS"),
  vite: mark("Vite", "Vite"),
  nmap: mark("nmap", "nmap"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const BASE_PATH = "/assets/projects-screenshots";
const P = ({ children }: { children: ReactNode }) => (
  <p className="font-mono mb-3 leading-relaxed">{children}</p>
);

const projects: Project[] = [
  {
    id: "secaudit",
    category: "Auditoría de código · LLM",
    title: "secaudit",
    src: `${BASE_PATH}/secaudit/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.llm,
      ],
    },
    github: "https://github.com/KristinaSabitova/secaudit",
    live: "#",
    get content() {
      return (
        <div>
          <ProjectsLinks live={this.live} repos={this.github && this.github !== "#" ? [{ label: "Código en GitHub", url: this.github }] : []} />
          <DemoAccess id="spectra" />
          <TypographyH3 className="my-4 mt-8">Qué es</TypographyH3>
          <P>
            Auditor de seguridad de código con backends LLM intercambiables
            (Claude Code, API de Anthropic, OpenAI y Ollama en local). Nació
            como CLI y ahora también funciona como aplicación web.
          </P>
          <TypographyH3 className="my-4 mt-8">Cómo funciona</TypographyH3>
          <P>
            Es una auditoría diferencial: guarda la huella SHA-256 de cada
            fichero para revisar solo lo que cambia. Cada hallazgo lleva su
            evidencia (fichero, ancla y fragmento de código) y un estado
            verified / unverified con su nota: lo que el motor no puede
            comprobar se marca como no verificado en lugar de inventarlo.
          </P>
          <TypographyH3 className="my-4 mt-8">Versión web</TypographyH3>
          <P>
            Modelo BYOK: cada usuario introduce su propia API key, que se
            cifra con Fernet, nunca vuelve al frontend y se usa en un
            subproceso aislado por auditoría. API en FastAPI, PostgreSQL con
            migraciones Alembic e informe en español o inglés.
          </P>
          <TypographyH3 className="my-4 mt-8">Límites conocidos</TypographyH3>
          <P>
            El motor aún no trocea repositorios grandes (techo de unos 150k
            tokens de entrada): lo que no cabe se marca como no verificado.
            Es la mejora prioritaria de la siguiente versión.
          </P>
        </div>
      );
    },
  },
  {
    id: "spectra",
    category: "Seguridad de IA · Red Team",
    title: "SPECTRA",
    src: SHOTS.spectra[1] ?? SHOTS.spectra[0] ?? `${BASE_PATH}/spectra/cover.png`,
    screenshots: SHOTS.spectra,
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.vite],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.nginx,
      ],
    },
    github: "https://github.com/KristinaSabitova/SPECTRA",
    live: "https://spectra.ksabitova.dev/login",
    get content() {
      return (
        <div>
          <ProjectsLinks
            live={this.live}
            repos={[{ label: "Código en GitHub", url: this.github! }]}
          />
          <TypographyH3 className="my-4 mt-8">Qué es</TypographyH3>
          <P>
            Plataforma red team para auditar la seguridad de pipelines de
            agentes de IA frente a ataques de inyección de prompt indirecta.
            No pregunta qué genera la IA, sino qué pasa cuando recibe input
            malicioso: ¿filtra datos internos?, ¿acepta instrucciones de un
            atacante?, ¿planta instrucciones persistentes en su memoria?
          </P>
          {SHOTS.spectra.length > 0 && (
            <>
              <TypographyH3 className="my-4 mt-8">Capturas</TypographyH3>
              <SlideShow images={SHOTS.spectra.map(asset)} />
            </>
          )}
          <TypographyH3 className="my-4 mt-8">Cómo funciona</TypographyH3>
          <ul className="font-mono list-disc ml-5 space-y-2 leading-relaxed">
            <li>
              <strong>Reconocimiento:</strong> fingerprinting del pipeline
              (LangChain, AutoGen, n8n, Dify), endpoints y herramientas.
            </li>
            <li>
              <strong>Inyección de payloads:</strong> 7 categorías de ataque
              (tool_misuse, context_poison, role_override, exfiltration,
              instruction_hijack, persistence_plant, jailbreak_assist).
            </li>
            <li>
              <strong>Clasificación forense:</strong> cada respuesta se marca
              como benigna, sospechosa o maliciosa, con el indicador exacto,
              su riesgo real y lo que el agente debería haber hecho.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Características</TypographyH3>
          <ul className="font-mono list-disc ml-5 space-y-2 leading-relaxed">
            <li>Dashboard en tiempo real (SSE) y línea de tiempo de la auditoría.</li>
            <li>Blast radius y detección de persistencia entre sesiones.</li>
            <li>Informes en Markdown, HTML y PDF; interfaz en ES / EN / RU.</li>
            <li>Roles (admin, senior, junior) y 2FA con TOTP.</li>
            <li>Laboratorio integrado con un agente vulnerable para probar.</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Hardening aplicado</TypographyH3>
          <ul className="font-mono list-disc ml-5 space-y-2 leading-relaxed">
            <li>
              SSRF: coincidencia exacta de prefijo de URL e IP pinning contra
              DNS rebinding (TOCTOU).
            </li>
            <li>XSS saneado con DOMPurify; validadores Pydantic y de paginación.</li>
            <li>Expresiones regulares resistentes a ReDoS.</li>
            <li>Salidas estructuradas en las llamadas al LLM.</li>
            <li>Cierre de escaladas de privilegios entre roles.</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Stack</TypographyH3>
          <P>
            FastAPI, SQLAlchemy y asyncio en el backend; React, TypeScript,
            Vite, Zustand y D3 en el frontend; Docker Compose, nginx,
            PostgreSQL y Let&apos;s Encrypt en la infraestructura.
          </P>
        </div>
      );
    },
  },
  {
    id: "domini",
    category: "Reconocimiento pasivo · OSINT",
    title: "DOMINI · SENTINEL",
    src: SHOTS.domini[0] ?? `${BASE_PATH}/domini/cover.png`,
    screenshots: SHOTS.domini,
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.nmap,
        PROJECT_SKILLS.dns,
        PROJECT_SKILLS.docker,
      ],
    },
    github: "https://github.com/KristinaSabitova/dominus",
    live: "https://domini.ksabitova.dev/login?next=%2Fdashboard",
    get content() {
      return (
        <div>
          <ProjectsLinks
            live={this.live}
            repos={[
              { label: "DOMINUS", url: "https://github.com/KristinaSabitova/dominus" },
              { label: "SENTINEL", url: "https://github.com/KristinaSabitova/sentinel" },
            ]}
          />
          <DemoAccess id="domini" />
          <TypographyH3 className="my-4 mt-8">Qué es</TypographyH3>
          <P>
            DOMINI Suite: dos herramientas de OSINT pasivo que juntas mapean
            la superficie de ataque de un objetivo sin tocarlo.{" "}
            <strong>DOMINUS</strong> analiza dominios y{" "}
            <strong>SENTINEL</strong> analiza direcciones IP. Perfilan la
            infraestructura, no a las personas.
          </P>
          {SHOTS.domini.length > 0 && (
            <>
              <TypographyH3 className="my-4 mt-8">Capturas</TypographyH3>
              <SlideShow images={SHOTS.domini.map(asset)} />
            </>
          )}
          <TypographyH3 className="my-4 mt-8">DOMINUS · dominios</TypographyH3>
          <ul className="font-mono list-disc ml-5 space-y-2 leading-relaxed">
            <li>WHOIS y registros DNS (SPF, DMARC y selectores DKIM).</li>
            <li>Subdominios por Certificate Transparency (crt.sh), sin fuerza bruta.</li>
            <li>Puertos y banners con nmap; auditoría de cabeceras HTTP de seguridad.</li>
            <li>LeakRadar: fugas de credenciales publicadas en Pastebin.</li>
            <li>
              Risk Score de 0 a 100 totalmente transparente e informe HTML
              autónomo.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">SENTINEL · IPs</TypographyH3>
          <ul className="font-mono list-disc ml-5 space-y-2 leading-relaxed">
            <li>Geolocalización, ASN y reputación de abusos (AbuseIPDB).</li>
            <li>Threat feeds (AlienVault OTX), puertos y banners.</li>
            <li>Detección de AWS, Azure, GCP y Cloudflare, y de nodos Tor.</li>
            <li>Threat Score de 0 a 100.</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Versión web</TypographyH3>
          <P>
            La suite también corre como aplicación web desplegada en un VPS
            propio, con login. Hardening aplicado: migración de python-jose a
            PyJWT, mitigación de SSRF con el módulo ipaddress, refresh tokens
            en cookies httpOnly y registros SPF/DMARC del dominio.
          </P>
        </div>
      );
    },
  },
  {
    id: "eraser",
    category: "En desarrollo · macOS",
    title: "eraser",
    src: `${BASE_PATH}/eraser/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [PROJECT_SKILLS.qt],
      backend: [PROJECT_SKILLS.python],
    },
    github: "#",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyH3 className="my-4 mt-8">Qué es</TypographyH3>
          <P>
            App de escritorio nativa para macOS (PySide6) para entender y
            recuperar espacio de almacenamiento: imágenes de máquinas
            virtuales (UTM/QEMU), Docker, copias de iOS, Xcode… Es de uso
            puramente local.
          </P>
          <TypographyH3 className="my-4 mt-8">Estado</TypographyH3>
          <P>
            Fase 1 completada: motor de escaneo con tamaños APFS correctos y
            10 recolectores, con 21 tests en verde. Siguientes fases: las
            operaciones de limpieza (con dry-run por defecto) y la interfaz
            gráfica.
          </P>
        </div>
      );
    },
  },
  {
    id: "vestigio",
    category: "Próximamente",
    title: "VESTIGIO",
    src: `${BASE_PATH}/vestigio/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.cli,
      ],
    },
    github: "#",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyH3 className="my-4 mt-8">Qué será</TypographyH3>
          <P>
            Diario de engagement y tracker de evidencias para pentest. CLI de
            Python en un solo archivo sobre SQLite, con captura de shell por
            PTY, gestión del ciclo de vida del engagement, cofre de
            credenciales, redacción automática de secretos al exportar e
            informes en HTML y Markdown.
          </P>
          <TypographyH3 className="my-4 mt-8">Estado</TypographyH3>
          <P>
            Todavía no está construido: hay un borrador y el diseño está en
            marcha. Pensado para publicarse con licencia MIT y recibir
            contribuciones de la comunidad.
          </P>
        </div>
      );
    },
  },
];
export default projects;
