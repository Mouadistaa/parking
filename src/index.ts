import { Context, Env, Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { serveStatic } from 'hono/serve-static';
import { Data } from 'hono/dist/types/context';

const app = new Hono()

app.get('/', HomeController);
app.use('/static/*', serveStatic({
  root: './src/assets',
  getContent: function (path: string, c: Context<Env, any, {}>): Promise<Data | Response | null> {
    throw new Error('Function not implemented.');
  }
}));
export default app

