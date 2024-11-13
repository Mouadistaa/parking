import City from "../classes/city";
import Parking from "../classes/Parking";

const aixEnProvence = new City("Aix-en-Provence", "France", { longitude: 43.533329, latitude: 5.43333 });
aixEnProvence.id = 1;

const laSpezia = new City("La Spezia", "Italie", { longitude: 44.238366, latitude: 9.6912326 });
laSpezia.id = 2;

const aixLaChapelle = new City("Aix La Chapelle", "Allemagne", { longitude: 50.776351, latitude: 6.083862 });
aixLaChapelle.id = 3;

const sanCristobal = new City("San Cristóbal de La Laguna", "Espagne", { longitude: 28.4871807, latitude: -16.3138790 });
sanCristobal.id = 4;

const newCastle = new City("Newcastle upon Tyne", "Angleterre", { longitude: 54.9738474, latitude: -1.6131572 });
newCastle.id = 5;

const parkA = new Parking("A", 1, 100, 4.5, true); 
const parkB = new Parking("B", 2, 50, 3, true);    
const parkC = new Parking("C", 2, 80, 2.5, true);  
const parkD = new Parking("D", 3, 40, 2.8, true);   
const parkE = new Parking("E", 4, 70, 3.1, true);   
const parkF = new Parking("F", 5, 60, 2.4, true);   
const parkG = new Parking("G", 5, 90, 3.2, true);

export const cities:City[]=[aixEnProvence,laSpezia,aixLaChapelle,newCastle];
export const parkings:Parking[]=[parkA,parkB,parkC,parkD,parkE,parkF,parkG];
