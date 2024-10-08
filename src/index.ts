import {Hono} from 'hono'
import {toSlug} from './utils/toSlug'
import {generateRandomNumberId} from './utils/generateRandomNumberId';
const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Hono!')

  
})

const titre = "je m'appelle abdel";
const slug = toSlug(titre);
const randomId = generateRandomNumberId();
console.log(randomId);
console.log(slug);
export default app
