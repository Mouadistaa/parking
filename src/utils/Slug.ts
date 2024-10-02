export function toSlug(chaine:string) {
    return removeAccents(chaine) // Enlever les accents
    .toLowerCase() // Convertir en minuscules
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/[^a-z0-9-]/g, '') // Supprimer les caractères non-alphanumériques sauf les tirets
    .replace(/--+/g, '-') // Remplacer les tirets multiples par un seul tiret
    .replace(/^-+|-+$/g, ''); // Enlever les tirets au début ou à la fin de la chaîne
}
const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export function generateId(chaine: string): number {
    const base = removeAccents(chaine).toLowerCase();
    let id = 0;
    for (let i = 0; i < base.length; i++) {
        id += base.charCodeAt(i) * (i + 1); // On utilise les codes ASCII des caractères pour générer l'ID
    }
    return id;
}