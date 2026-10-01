/**
 * Antepone la subruta de despliegue a los recursos de /public.
 * En GitHub Pages de proyecto (usuario.github.io/portfolio) hace falta
 * NEXT_PUBLIC_BASE_PATH=/portfolio; en la raíz de un dominio queda vacío.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path: string): string =>
  path && path.startsWith("/") ? `${BASE}${path}` : path;
