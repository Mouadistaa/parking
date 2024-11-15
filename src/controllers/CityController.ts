import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCities = async (c: any) => {
    try {
      const cities = await prisma.city.findMany();
      return c.json(cities);
    } catch (error) {
      console.error(error);
      return c.json({ error: 'Erreur lors de la récupération des villes' }, 500);
    }
  };

  export const createCity = async (c: any) => {
    const { name, slug, location, country } = await c.req.json();
    try {
      const newCity = await prisma.city.create({
        data: { name, slug, location, country },
      });
      return c.json(newCity);
    } catch (error) {
      console.error(error);
      return c.json({ error: 'Erreur lors de la création de la ville' }, 500);
    }
  };

  export const getParkings = async (c: any) => {
    try {
      const parkings = await prisma.parking.findMany();
      return c.json(parkings);
    } catch (error) {
      console.error(error);
      return c.json({ error: 'Erreur lors de la récupération des parkings' }, 500);
    }
  };