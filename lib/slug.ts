const ACENTOS: Record<string, string> = {
  á: "a", é: "e", í: "i", ó: "o", ú: "u", ü: "u", ñ: "n",
};

export function slugify(texto: string) {
  const sinAcentos = texto
    .toLowerCase()
    .split("")
    .map((c) => ACENTOS[c] ?? c)
    .join("");

  return sinAcentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
