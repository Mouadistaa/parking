export function toSlug(input: string): string {
    return input
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Enleve les accents
      .replace(/[^a-z0-9]+/g, '-')     // Remplace les espaces par des tirets
      .replace(/(^-|-$)+/g, '');       // Supprime les tirets en début et fin de chaîne
  }
  