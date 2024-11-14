import { BillingService } from '../services/BillingService';
import Park from '../classes/Park';
import { Context } from 'hono';

export const calculateParkingFeeController = (ctx: Context) => {
    // Exemple d'obtention d'un enregistrement de Park
    const park = new Park(1, new Date("2024-11-13T08:00:00"), new Date("2024-11-13T10:30:00"),4.5,false, 4.5);

    const durationInHours = park.getDurationInHours();
    const totalFee = BillingService.calculateFee(park.hourlyRate, durationInHours);

    ctx.html(`<h1>Montant de la Facture</h1><p>Total: ${totalFee}€</p>`);
};