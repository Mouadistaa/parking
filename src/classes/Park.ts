import { v4 } from "uuid";
export default class Park{
    id:string;
    spot_id:number;
    startedAt:Date;
    endedAt:Date;
    price:number;
    paid:boolean;
    hourlyRate: number;

    constructor(spotId:number,dateStart:Date,dateEnd:Date,prix:number,paye:boolean,hourlyRate: number){
        this.id=v4();
        this.spot_id=spotId;
        this.startedAt=dateStart;
        this.endedAt=dateEnd;
        this.price=prix;
        this.paid=paye;
        this.hourlyRate = hourlyRate;
    }
    getDurationInHours(): number {
        const durationInMs = this.endedAt.getTime() - this.startedAt.getTime(); 
        return durationInMs / (1000 * 60 * 60); 
      }
}