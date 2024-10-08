import { v4 as uuidv4 } from 'uuid';

export class Park {
  id: string;
  spotId: number;
  startedAt: Date;
  endedAt: Date | null;
  price: number;
  paid: boolean;

  constructor(spotId: number, startedAt: Date, price: number) {
    this.id = uuidv4();
    this.spotId = spotId;
    this.startedAt = startedAt;
    this.endedAt = null;
    this.price = price;
    this.paid = false;
  }

  endPark(endedAt: Date) {
    this.endedAt = endedAt;
  }

  makePayment() {
    this.paid = true;
  }
}
