// src/controllers/parking/ReadAllCitiesController.ts

import { Request, Response } from 'express';
import { cities } from '../data/staticDatabase'; // Importer les villes
import { renderCitiesView } from '../views/city/ReadAllCitiesView'; // Importer la fonction pour générer la vue
import City from '../classes/city';
export const getCities = (req: Request, res: Response) => {
  try {
    const htmlContent = renderCitiesView(cities); // Générer la vue HTML avec les villes
    res.send(htmlContent); // Renvoyer la vue HTML
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la récupération des villes');
  }
};


