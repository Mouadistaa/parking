import { toSlug } from "../utils/toSlug";
import { GPS } from "../types/GPS";

export class City {
    id: number;           
    name: string;         
    slug: string;         
    parkingsIds: number[]; 
    country: string;      
    location: GPS;        
    
    constructor(id: number, name: string, country: string, location: GPS) {
      this.id = id;
      this.name = name;
      this.slug = toSlug(name); 
      this.parkingsIds = [];
      this.country = country;
      this.location = location; 
    }
  
    // Méthode pour ajouter un parking à la ville
    addParking(parkingId: number): void {
      this.parkingsIds.push(parkingId);
    }
}
