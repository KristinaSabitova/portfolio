const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sitio 100 % estático: se genera en /out y se sirve desde GitHub Pages,
  // nginx o cualquier hosting de ficheros. Sin servidor Node en producción.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // GitHub Pages de proyecto vive en /<repo>: se define en el workflow.
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
