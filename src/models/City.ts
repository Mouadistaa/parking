// City.ts
import { toSlug } from "../utils/toSlug";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import { GPS } from "../types/GPS";

export class City { // Notez que nous avons ici un export nommé
    id: number;
    name: string;
    slug: string;
    parkingsIds: number[];
    country: string;
    location: GPS;

    constructor(name: string, country: string, location: GPS) {
        this.id = generateRandomNumberId();
        this.name = name;
        this.slug = toSlug(name); // Utilisez 'name' ici pour créer le slug correctement
        this.parkingsIds = [];
        this.country = country;
        this.location = location;
    }

    addParking(parkingId: number): void {
        this.parkingsIds.push(parkingId);
    }
}

