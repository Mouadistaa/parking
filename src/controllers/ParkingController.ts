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

export const getParkingIndicators = (ctx: Context) => {
    const indicators = parkings.map(parking => ({
        name: parking.name,
        occupiedSpots: parking.occupiedSpots,
        occupationRate: parking.getOccupationRate().toFixed(2) + '%'
    }));
    return ctx.json(indicators);
};

export const getSortedParkingHistory = (ctx: Context) => {
    const order = ctx.req.query('order') as 'asc' | 'desc' || 'asc';
    const history = parkings.flatMap(parking => parking.history || []);
    const sortedHistory = BillingService.sortHistoryByDate(history, order);
    return ctx.json(sortedHistory);
};

export const filterParkingHistoryController = (ctx: Context) => {
    const parkingId = Number(ctx.req.param('id')); 
    const startDateParam = ctx.req.query('startDate');
    const endDateParam = ctx.req.query('endDate');

    // Verification si les parametres existent
    if (!startDateParam || !endDateParam) {
        console.log("Dates manquantes");
        return ctx.html('<h1>400 - Bad Request</h1><p>Les paramètres de date de début et de fin sont manquants.</p>', 400);
    }

    const startDate = new Date(startDateParam);
    const endDate = new Date(endDateParam);

    // Verification de la validite des dates
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        console.log("Dates invalides");
        return ctx.html('<h1>400 - Bad Request</h1><p>Les dates de début et de fin sont invalides.</p>', 400);
    }

    const parking = parkings.find(p => p.id === parkingId);

    if (!parking) {
        console.log(`Parking avec ID ${parkingId} non trouvé`);
        return ctx.html('<h1>404 - Parking Not Found</h1><p>Le parking que vous recherchez n\'existe pas.</p>', 404);
    }

    // Filtrer l'historique du parking par date
    const filteredHistory = parking.filterHistoryByDate(startDate, endDate);
    console.log("Historique filtré:", filteredHistory);

    // Calcul du revenu total pour la periode
    const totalRevenue = filteredHistory.reduce((acc, entry) => {
        const fee = BillingService.calculateFee(parking.hourlyRate, entry.duration);
        console.log(`Calcul du revenu pour la date ${entry.date}: ${fee} €`);
        return acc + fee;
    }, 0);

    console.log("Revenu total calculé:", totalRevenue);

    // Retourner les données filtrées avec le revenu total
    return ctx.json({
        parkingId: parking.id,
        filteredHistory,
        totalRevenue: totalRevenue.toFixed(2) + ' €' 
    });
};