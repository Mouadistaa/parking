import { Context, Env, Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { serveStatic } from 'hono/serve-static';
import { Data } from 'hono/dist/types/context';
import {getCities, createCity, getParkings} from "./controllers/CityController";

const app = new Hono()
app.use('/static/*', serveStatic({
  root: './static',
  getContent: async (path: string, c: Context): Promise<Data | Response | null> => {
    // Basic implementation returning the file from the static folder
    const fs = require('fs').promises;
    try {
      const fileContent = await fs.readFile(path);
      return fileContent;
    } catch (error) {
      return null; // Return null if the file is not found
    }
  }
}));

app.get('/', HomeController);

app.get('/cities', getCities);
app.post('/cities', createCity);
app.get('/parkings', getParkings);

app.get('/cities', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head><title>Our Cities</title></head>
    <body>
      <h1>List of Cities</h1>
      <ul>
        <li>Paris</li>
        <li>Marseille</li>
        <li>Lyon</li>
      </ul>
      <a href="/">Back to Home</a>
    </body>
    </html>
  `);
});

app.get('/parkings', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head><title>Our Car Parks</title></head>
    <body>
      <h1>List of Car Parks</h1>
      <ul>
        <li>Parking A - Paris</li>
        <li>Parking B - Marseille</li>
        <li>Parking C - Lyon</li>
      </ul>
      <a href="/">Back to Home</a>
    </body>
    </html>
  `);
});




export default app

