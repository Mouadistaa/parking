import { GPS } from '../types/GPS';
import { generateRandomNumberId } from '../utils/generateRandomNumberId';

export class Parking {
  id: number;
  name: string;
  cityId: number;
  location: GPS;
  numberOfSpots: number;
  hourlyRate: number;
  parkIds: number[];
  opened: boolean;

  constructor(name: string, cityId: number, location: GPS, numberOfSpots: number, hourlyRate: number) {
    this.id = generateRandomNumberId();
    this.name = name;
    this.cityId = cityId;
    this.location = location;
    this.numberOfSpots = numberOfSpots;
    this.hourlyRate = hourlyRate;
    this.parkIds = [];
    this.opened = true;
  }

  addSpot(spotId: number): void {
    if (this.parkIds.length < this.numberOfSpots) {
      this.parkIds.push(spotId);
    } else {
      console.log(`Le parking ${this.name} est plein.`);
    }
  }

  close(): void {
    this.opened = false;
    console.log(`Le parking ${this.name} est maintenant fermé.`);
  }

  open(): void {
    this.opened = true;
    console.log(`Le parking ${this.name} est maintenant ouvert.`);
  }
}
