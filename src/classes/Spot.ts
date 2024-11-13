import { generateRandomNumberId } from "../utils/generateRandomNumberId";
export default class Spot{
    id : number;
    parking_id : number;
    constructor(parkingId:number){
        this.id=generateRandomNumberId();
        this.parking_id=parkingId;
    }
}