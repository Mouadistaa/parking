import { v4 } from "uuid";
export class Park{
    id:string;
    spot_id:number;
    startedAt:Date;
    endedAt:Date;
    price:number;
    paid:boolean;
    constructor(spotId:number,dateStart:Date,dateEnd:Date,prix:number,paye:boolean){
        this.id=v4();
        this.spot_id=spotId;
        this.startedAt=dateStart;
        this.endedAt=dateEnd;
        this.price=prix;
        this.paid=paye;
    }
}