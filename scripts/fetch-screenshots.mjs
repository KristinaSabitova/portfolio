// Descarga las capturas de los README de DOMINUS y SPECTRA y las deja en
// public/assets/projects-screenshots/<id>/shot-N.png. Escribe también
// src/data/screenshots.json (las tarjetas usan ese listado).
//
// Uso:  node scripts/fetch-screenshots.mjs
// Requiere Node 18+ y acceso a internet.
import { mkdir, writeFile } from "node:fs/promises";

const SOURCES = {
  domini: [
    "https://github.com/user-attachments/assets/43c45e5f-04e7-43c2-b048-df254a7bec59",
  ],
  spectra: [
    "https://github.com/user-attachments/assets/a07a6c14-1223-4f26-b332-4e118f47e186",
    "https://github.com/user-attachments/assets/8a9e9c8c-59f5-4773-b0f6-7b0b093666e2",
    "https://github.com/user-attachments/assets/08539aff-1ab5-44b1-b906-58fd3e709c88",
  ],
};

const result = {};
for (const [id, urls] of Object.entries(SOURCES)) {
  const dir = `public/assets/projects-screenshots/${id}`;
  await mkdir(dir, { recursive: true });
  result[id] = [];
  for (const [i, url] of urls.entries()) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      const type = res.headers.get("content-type") || "";
      if (!res.ok || !type.startsWith("image/")) {
        throw new Error(`HTTP ${res.status} (${type || "sin content-type"})`);
      }
      const ext = type.includes("jpeg") ? "jpg" : type.includes("webp") ? "webp" : "png";
      const file = `shot-${i + 1}.${ext}`;
      await writeFile(`${dir}/${file}`, Buffer.from(await res.arrayBuffer()));
      result[id].push(`/assets/projects-screenshots/${id}/${file}`);
      console.log(`OK    ${id}/${file}`);
    } catch (e) {
      console.error(`FALLO ${id} #${i + 1}: ${e.message}`);
    }
  }
}
await writeFile("src/data/screenshots.json", JSON.stringify(result, null, 2) + "\n");
console.log("\nsrc/data/screenshots.json actualizado:", JSON.stringify(result));
