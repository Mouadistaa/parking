import { City } from '../models/City';
import { Parking } from '../models/Parking';

// Définition des villes avec leurs coordonnées GPS
const cities: City[] = [
  new City(1, 'Aix-en-Provence', 'France', { latitude: 43.5297, longitude: 5.4543 }),
  new City(2, 'La Spezia', 'Italie', { latitude: 44.2384, longitude: 9.6912 }),
  new City(3, 'Aix-la-Chapelle', 'Allemagne', { latitude: 50.7764, longitude: 6.0839 }),
  new City(4, 'San Cristóbal de La Laguna', 'Espagne', { latitude: 28.4872, longitude: -16.3139 }),
  new City(5, 'Newcastle upon Tyne', 'Angleterre', { latitude: 54.9739, longitude: -1.617439 }),
];

// Définition des parkings associés aux villes avec utilisation du type GPS
const parkings: Parking[] = [
  new Parking('Parking A', 1, { latitude: 43.5297, longitude: 5.4543 }, 100, 4.5),
  new Parking('Parking B', 2, { latitude: 44.2384, longitude: 9.6912 }, 50, 3.0),
  new Parking('Parking C', 2, { latitude: 44.2384, longitude: 9.6912 }, 80, 2.5),
  new Parking('Parking D', 3, { latitude: 50.7764, longitude: 6.0839 }, 40, 2.8),
  new Parking('Parking E', 4, { latitude: 28.4872, longitude: -16.3139 }, 70, 3.1),
  new Parking('Parking F', 5, { latitude: 54.9739, longitude: -1.617439 }, 60, 2.4),
  new Parking('Parking G', 5, { latitude: 54.9739, longitude: -1.617439 }, 90, 3.2),
];

export { cities, parkings };
