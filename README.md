# Portfolio de Kristina Solomatova Sabitova

Portfolio personal: seguridad ofensiva · Red Team. Teclado 3D interactivo (cada tecla es una habilidad), animaciones al hacer scroll, fichas de proyecto y tema claro/oscuro.

**Basado en** [3d-portfolio de Naresh Khatri](https://github.com/Naresh-Khatri/3d-portfolio) (MIT). El crédito aparece en el pie de página, como pide el autor.

## Cambios respecto a la plantilla

- **Telemetría eliminada**: la plantilla enviaba el hostname de cada despliegue a `nareshkhatri.dev/api/collect` (`src/components/analytics.tsx`). También quitados Umami, Google Analytics, chat/cursores en tiempo real (socket.io), formulario Resend, detector de devtools, easter eggs y el gato de la escena.
- Todo su contenido personal (foto, CV, capturas, blog, favicon) retirado.
- Fuentes e iconos **autoalojados**; sitio exportado **100 % estático** (`output: "export"`).
- Contenido en español con mis datos, experiencia y proyectos.

## Peticiones a terceros que quedan

- `unpkg.com` → el runtime de Spline descarga ahí sus `.wasm` (versión fija 1.9.21).
- `fonts.gstatic.com` → la escena `skills-keyboard.spline` pide sus propias fuentes.

Para eliminarlas habría que autoalojar esos ficheros y reexportar la escena desde el editor de Spline.

## Uso

```bash
npm install
npx next telemetry disable   # el CLI de Next.js tiene telemetría propia
npm run dev                  # http://localhost:3000
npm run build                # genera ./out (estático)
```

Despliegue en GitHub Pages (repo aparte, sin dominio propio): el workflow `.github/workflows/deploy.yml` construye con
`NEXT_PUBLIC_BASE_PATH=/<nombre-del-repo>` y publica en `https://<usuario>.github.io/<repo>/`.
Ajustes manuales: Settings → Pages → Source: **GitHub Actions**. El repo debe ser público (plan gratuito).
Para probar en local con subruta: `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build`.

## Dónde editar

| Archivo | Qué contiene |
|---|---|
| `src/data/config.ts` | Nombre, correo, dominio, GitHub |
| `src/data/constants.ts` | Habilidades (teclas) y experiencia |
| `src/data/projects.tsx` | Proyectos |
| `public/assets/projects-screenshots/<id>/cover.png` | Portadas (sustituibles por capturas reales) |

## Teclado 3D

Las teclas viven dentro de `public/assets/skills-keyboard.spline` y son fijas. En `constants.ts` cada habilidad tiene `enabled`: solo se muestran las `true`; el resto se ocultan. Para añadir teclas nuevas (Python, Burp, Kali…): abrir el `.spline` en el editor de Spline, cambiar el logo de una tecla, renombrar el objeto igual que el `name` en `constants.ts` y exportar.

Habilitadas ahora: HTML, CSS, JavaScript, TypeScript, React, PostgreSQL, Git, GitHub, Docker, nginx, Linux.

## Capturas de DOMINI y SPECTRA

Las capturas viven en los README de los repos (alojadas por GitHub). Para traerlas:

```bash
node scripts/fetch-screenshots.mjs
```

Guarda las imágenes en `public/assets/projects-screenshots/<proyecto>/shot-N.png` y actualiza `src/data/screenshots.json`; las tarjetas y el carrusel de cada ficha se rellenan solos. Revisa las imágenes antes de publicar (que no muestren claves, IPs ni códigos de invitación).
