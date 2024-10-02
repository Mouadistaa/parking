import { Hono } from 'hono'
import {toSlug} from './utils/Slug'
import { generateId } from './utils/Slug';
const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Honofezfzefez!')

  
})

const titre = "je m'appelle abdel!jugkjhkj";
const slug = toSlug(titre);
const id = generateId(titre);
console.log(slug);
console.log(id);
export default app
