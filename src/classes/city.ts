// src/classes/city.ts
import { toSlug } from "../utils/toSlug";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import { GPS } from "../types/GPS"; // Type pour la localisation

export default class City {
  id: number;
  name: string;
  slug: string;
  parkingsIds: number[];
  country: string;
  location: GPS; // Assurez-vous que GPS est un type valide

  constructor(name: string, country: string, location: GPS) {
    this.id = generateRandomNumberId();
    this.name = name;
    this.slug = toSlug(name); // Utilisez "name" pour générer le slug
    this.parkingsIds = [];
    this.country = country;
    this.location = location;
  }

  // Méthode pour ajouter un parking à la ville
  addParking(parkingId: number): void {
    this.parkingsIds.push(parkingId);
  }
}
