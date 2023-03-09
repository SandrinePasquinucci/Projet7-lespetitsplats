export function normalizeChaine(chaine) {
  const minuscule = chaine.trim().toLowerCase();
  const accent = minuscule.normalise("NFD").replace(/[\u0300-\u036f]/g, "");
}
