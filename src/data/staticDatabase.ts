import City from "../classes/city";
import Parking from "../classes/Parking";

var aixEnProvence=new City("Aix-en-Provence","France",{longitude:43.533329,latitude:5.43333});
var parkA=new Parking("A",aixEnProvence,100,4.5,true);

var laSpezia=new City("La Spezia","Italie",{longitude:44.238366,latitude:9.6912326});
var parkB=new Parking("B",laSpezia,50,3,true);
var parkC=new Parking("C",laSpezia,80,2.5,true);

var aixLaChapelle=new City("Aix La Chapelle","Allemagne",{longitude:50.776351,latitude:6.083862});
var parkD=new Parking("D",aixLaChapelle,40,2.80,true);
var sanCristobal=new City("San Cristóbal de La Laguna","Espagne",{longitude:28.487180709838867,latitude:-16.313879013061523});
var parkE=new Parking("E",sanCristobal,70,3.10,true);

var newCastel=new City("Newcastle upon Tyne","Angleterre",{longitude:54.9738474,latitude:-1.6131572});
var parkF=new Parking("F",newCastel,60,2.40,true);
var parkG=new Parking("G",newCastel,90,3.20,true);

export const cities:City[]=[aixEnProvence,laSpezia,aixLaChapelle,newCastel];
export const parkings:Parking[]=[parkA,parkB,parkC,parkD,parkE,parkF,parkG];



