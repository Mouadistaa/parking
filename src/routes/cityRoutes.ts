import { Hono } from 'hono';
const cityRoutes = new Hono();

cityRoutes.get('/', (ctx) => {
    return ctx.html('<h1>Page d\'accueil des villes</h1>');
});

export default cityRoutes;
