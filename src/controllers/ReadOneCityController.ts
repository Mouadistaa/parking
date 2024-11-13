import { Context } from 'hono';
import { cities, parkings } from '../data/staticDatabase';
import ReadOneCityView from '../views/city/ReadOneCityView';

export const ReadOneCityController = (ctx: Context) => {
    const { slug } = ctx.req.param();
    const city = cities.find(city => city.slug === slug);
    
    if (!city) {
        return ctx.html('<h1>404 - Ville Non Trouvée</h1><p>La ville que vous recherchez n\'existe pas.</p>', 404);
    }

    const cityParkings = parkings.filter(parking => parking.city_id === city.id);
    const htmlContent = ReadOneCityView({ city, parkings: cityParkings });
    return ctx.html(htmlContent);
};
