import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import City from "./city";
import Spot from "./Spot";
import { GPS } from "../types/GPS";

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

        for (let i = 0; i < numberOfSpots; i++) {
            const spot = new Spot(this.id); 
            this.parkIds.push(spot.id);
        }
    }
    getAvailableSpots(): number {
        return this.numberOfSpots - this.occupiedSpots;
    }
}