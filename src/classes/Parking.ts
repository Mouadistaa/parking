import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import City from "./city";
import Park from "./Park";
import Spot from "./Spot";
export default class Parking{
    id : number;
    name : string;
    city_id : number;
    opened:boolean;
    numberOfSpots:number;
    location :GPS;
    hourlyRate: number;
    parkIds: number[];
    
    constructor(name:string,city:City,numberOfSpots:number,hourlyRate: number,opened:boolean){
        this.id=generateRandomNumberId();
        this.name=name;
        this.location=city.location;
        this.city_id=city.id;
        this.opened=opened;
        this.numberOfSpots=numberOfSpots;
        this.hourlyRate=hourlyRate;
        this.parkIds=[];
        city.parkingsIds.push(this.id);
        for(var i=0;i<numberOfSpots;i++){
            var parki=new Spot(this.id);
            this.parkIds.push(parki.id);
        }
    }
}