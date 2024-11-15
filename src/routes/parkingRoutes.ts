import { Hono } from 'hono';
import { parkings } from '../data/staticDatabase';
import { sortParkingsController } from '../controllers/ParkingController';
import { SortingService } from '../services/SortingService';

const parkingRoutes = new Hono();

parkingRoutes.get('/', (ctx) => {
    const htmlContent = `
        <h1>Liste des Parkings</h1>
        <ul>
            ${parkings.map(parking => `<li>${parking.name} - ${parking.numberOfSpots} places - Tarif: ${parking.hourlyRate}€/h</li>`).join('')}
        </ul>
    `;
    return ctx.html(htmlContent);
});

parkingRoutes.get('/sort/total/:order', (ctx) => {
    const order = ctx.req.param('order') as 'asc' | 'desc';
    const sortedParkings = SortingService.sortByTotalSpots(parkings, order);
    const htmlContent = `
      <h1>Liste des Parkings (Triée par nombre total de places - ${order})</h1>
      <ul>
        ${sortedParkings.map(parking => `<li>${parking.name} - ${parking.numberOfSpots} places - Tarif: ${parking.hourlyRate}€/h</li>`).join('')}
      </ul>
    `;
    return ctx.html(htmlContent);
  });

parkingRoutes.get('/sort/available/:order', (ctx) => {
  const order = ctx.req.param('order') as 'asc' | 'desc';
  const sortedParkings = SortingService.sortByAvailableSpots(parkings, order);
  const htmlContent = `
    <h1>Liste des Parkings (Triée par places disponibles - ${order})</h1>
    <ul>
      ${sortedParkings.map(parking => `<li>${parking.name} - ${parking.numberOfSpots - parking.occupiedSpots} places disponibles - Tarif: ${parking.hourlyRate}€/h</li>`).join('')}
    </ul>
  `;
  return ctx.html(htmlContent);
});

export default parkingRoutes;
