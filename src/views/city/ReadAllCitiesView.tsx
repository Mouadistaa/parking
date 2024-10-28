// src/views/city/ReadAllCitiesView.ts

import {City} from '../../models/City'; // Assurez-vous que le chemin est correct

// Définition de la fonction pour générer la vue
export const renderCitiesView = (cities: City[]): string => {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Liste des Villes</title>
      <style>
        body { font-family: Arial, sans-serif; }
        ul { list-style-type: none; padding: 0; }
        li { padding: 8px; border-bottom: 1px solid #ccc; }
      </style>
    </head>
    <body>
      <h1>Liste des Villes</h1>
      <ul>
        ${cities.map(city => `<li>${city.name}</li>`).join('')}
      </ul>
    </body>
    </html>
  `;
};







  