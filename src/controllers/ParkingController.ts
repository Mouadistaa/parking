import { BillingService } from '../services/BillingService';
import Park from '../classes/Park';
import { Context } from 'hono';
import { SortingService } from '../services/SortingService';
import { parkings } from '../data/staticDatabase';

export const calculateParkingFeeController = (ctx: Context) => {
    const park = new Park(1, new Date("2024-11-13T08:00:00"), new Date("2024-11-13T10:30:00"),4.5,false, 4.5);

    const durationInHours = park.getDurationInHours();
    const totalFee = BillingService.calculateFee(park.hourlyRate, durationInHours);

    ctx.html(`<h1>Montant de la Facture</h1><p>Total: ${totalFee}€</p>`);
};

export const sortParkingsController = (ctx: Context, sortBy: string) => {
    const order = ctx.req.param('order') as 'asc' | 'desc';
    let sortedParkings;

    if (sortBy === 'total') {
        sortedParkings = SortingService.sortByTotalSpots(parkings, order);
    } else if (sortBy === 'available') {
        sortedParkings = SortingService.sortByAvailableSpots(parkings, order);
    } else {
        return ctx.html('<p>Paramètre de tri invalide</p>', 400);
    }

    const htmlContent = `
        <h1>Liste des Parkings (Triée par ${sortBy} - ${order})</h1>
        <ul>
            ${sortedParkings.map(parking => `<li>${parking.name} - ${parking.numberOfSpots} places - Tarif: ${parking.hourlyRate}€/h</li>`).join('')}
        </ul>
    `;
    return ctx.html(htmlContent);
};
