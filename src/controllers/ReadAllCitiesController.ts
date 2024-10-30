import { Context } from 'hono';
import { cities } from '../data/staticDatabase';
import ReadAllCitiesView from '../views/city/ReadAllCitiesView';

export const ReadAllCitiesController = (ctx: Context) => {
    return ctx.html(ReadAllCitiesView({ cities }));
};

