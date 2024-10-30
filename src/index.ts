import { Context, Env, Hono } from 'hono'
import parkingRoutes from './routes/parkingRoutes';
import cityRoutes from './routes/cityRoutes';
import { HomeController } from './controllers/HomeController';
import { parkings, cities } from './data/staticDatabase';
import { ReadAllCitiesController } from './controllers/ReadAllCitiesController';
import { ReadOneCityController } from './controllers/ReadOneCityController';
import { trimTrailingSlash, } from 'hono/trailing-slash'

import { serveStatic } from 'hono/serve-static';
import { Data } from 'hono/dist/types/context';


const app = new Hono()

app.get('/', HomeController);

app.route('/parking', parkingRoutes);
app.route('/city', cityRoutes);

app.get('/cities', ReadAllCitiesController);
app.get('/cities/:slug', ReadOneCityController);

app.use('*', trimTrailingSlash());

app.notFound((c) => {
  return c.html('<h1>404 - Page Not Found</h1><p>La page que vous recherchez n\'existe pas.</p>', 404);
});

app.onError((err, c) => {
  console.error(err); 
  return c.html('<h1>500 - Erreur Interne du Serveur</h1><p>Une erreur est survenue sur le serveur.</p>', 500);
});


app.use('/static/*', serveStatic({
  root: './static',
  getContent: function (path: string, c: Context<Env, any, {}>): Promise<Data | Response | null> {
    throw new Error('Function not implemented.');
  }
}));

export default app

