export function toSlug(chaine : string):string{
    chaine=chaine.toLowerCase();
    chaine=chaine.replace(/ /gi,"-");
    chaine=chaine.replace(/'/gi,"-");
    chaine=chaine.replace(/é/gi,"e");
    chaine=chaine.replace(/è/gi,"e");
    chaine=chaine.replace(/à/gi,"a");
    chaine=chaine.replace(/ê/gi,"e");
    chaine=chaine.replace(/ù/gi,"u");
    chaine=chaine.replace(/ç/gi,"c");
    return chaine;
}
