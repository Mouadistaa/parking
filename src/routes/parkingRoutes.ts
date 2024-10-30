import { Hono } from 'hono';
const parkingRoutes = new Hono();

parkingRoutes.get('/', (ctx) => {
    return ctx.html('<h1>Page d\'accueil du parking</h1>');
});

export default parkingRoutes;
