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
import {getCities, createCity, getParkings} from "./controllers/CityController";
import { filterParkingHistoryController, sortParkingsController } from './controllers/ParkingController';


const app = new Hono()

app.get('/', HomeController);

app.route('/parkings', parkingRoutes);
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
  getContent: async (path: string, c: Context): Promise<Data | Response | null> => {
    const fs = require('fs').promises;
    try {
      const fileContent = await fs.readFile(path);
      return fileContent;
    } catch (error) {
      return null; 
    }
  }
}));

app.get('/sort/total/:order', (ctx) => sortParkingsController(ctx, 'total'));
app.get('/sort/available/:order', (ctx) => sortParkingsController(ctx, 'available'));

app.route('/parking', parkingRoutes);
app.get('/parking/:id/history', filterParkingHistoryController);

export default app

