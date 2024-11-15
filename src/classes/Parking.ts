import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import City from "./city";
import Spot from "./Spot";
import { GPS } from "../types/GPS";


type ParkingHistory = {
    date: Date;
    duration: number; 
};

export default class Parking{
    id : number;
    name : string;
    city_id : number;
    opened:boolean;
    numberOfSpots:number;
    location :GPS;
    hourlyRate: number;
    parkIds: number[];
    occupiedSpots: number;
    history: ParkingHistory[];
    
    constructor(name:string,city_id: number,numberOfSpots:number,hourlyRate: number,opened:boolean,occupiedSpots: number){
        this.id=generateRandomNumberId();
        this.name=name;
        this.location={ longitude: 0, latitude: 0 };
        this.city_id=city_id;
        this.opened=opened;
        this.numberOfSpots=numberOfSpots;
        this.hourlyRate=hourlyRate;
        this.parkIds=[];
        this.occupiedSpots = occupiedSpots;
        this.history = [];

        for (let i = 0; i < numberOfSpots; i++) {
            const spot = new Spot(this.id); 
            this.parkIds.push(spot.id);
        }
    }
    getAvailableSpots(): number {
        return this.numberOfSpots - this.occupiedSpots;
    }
    getOccupationRate(): number {
        return (this.occupiedSpots / this.numberOfSpots) * 100;
    }
    filterHistoryByDate(startDate: Date, endDate: Date) {
        console.log('Filter history by date:', { startDate, endDate });
        return this.history.filter(entry => entry.date >= startDate && entry.date <= endDate);
    }
}