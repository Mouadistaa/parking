
export function toSlug(input: string): string {
    return input
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') 
      .replace(/[^a-z0-9]+/g, '-')     
      .replace(/(^-|-$)+/g, '');      
  }
  
