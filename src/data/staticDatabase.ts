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

const parkA = new Parking("A", 1, 100, 4.5, true,50);
parkA.history = [
    { date: new Date('2024-11-10T10:00:00Z'), duration: 2 },
    { date: new Date('2024-11-11T12:00:00Z'), duration: 3 },
];
const parkB = new Parking("B", 2, 50, 3, true,25);   
parkB.history = [
    { date: new Date('2024-11-09T09:00:00Z'), duration: 1.5 },
    { date: new Date('2024-11-12T14:30:00Z'), duration: 2.5 },
]; 
const parkC = new Parking("C", 2, 80, 2.5, true,40);
parkC.history = [
    { date: new Date('2024-11-08T08:30:00Z'), duration: 1 },
    { date: new Date('2024-11-13T16:00:00Z'), duration: 2 },
];  
const parkD = new Parking("D", 3, 40, 2.8, true,20);
parkD.history = [
    { date: new Date('2024-11-10T11:00:00Z'), duration: 3.5 },
    { date: new Date('2024-11-12T17:45:00Z'), duration: 1.8 },
];   
const parkE = new Parking("E", 4, 70, 3.1, true,35);   
parkE.history = [
    { date: new Date('2024-11-09T07:15:00Z'), duration: 4 },
    { date: new Date('2024-11-13T13:30:00Z'), duration: 2.2 },
];
const parkF = new Parking("F", 5, 60, 2.4, true,30);
parkF.history = [
    { date: new Date('2024-11-08T15:00:00Z'), duration: 3 },
    { date: new Date('2024-11-12T18:15:00Z'), duration: 1.5 },
];   
const parkG = new Parking("G", 5, 90, 3.2, true,45);
parkG.history = [
    { date: new Date('2024-11-10T09:00:00Z'), duration: 2.5 },
    { date: new Date('2024-11-13T10:45:00Z'), duration: 2 },
];

export const cities:City[]=[aixEnProvence,laSpezia,aixLaChapelle,newCastle];
export const parkings:Parking[]=[parkA,parkB,parkC,parkD,parkE,parkF,parkG];

parkings.forEach((parking, index) => {
    console.log(`Parking ${index + 1}:`, parking);
});
