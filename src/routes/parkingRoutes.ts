import { Hono } from 'hono';
import { parkings } from '../data/staticDatabase';

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

export default parkingRoutes;
