import { Context, Env, Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { serveStatic } from 'hono/serve-static';
import { Data } from 'hono/dist/types/context';


const app = new Hono()
app.use('/static/*', serveStatic({
  root: './static',
  getContent: function (path: string, c: Context<Env, any, {}>): Promise<Data | Response | null> {
    throw new Error('Function not implemented.');
  }
}));
app.get('/', HomeController);

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

