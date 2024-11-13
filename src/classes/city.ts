import { toSlug } from "../utils/toSlug";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";

export default class City{
    id : number;
    name : string;
    slug : string;
    parkingsIds:number[];
    country:string;
    location :GPS;
    constructor(name:string,country:string,location:GPS){
        this.id=generateRandomNumberId();
        this.name=name;
        this.slug=toSlug("name");
        this.parkingsIds=[];
        this.country=country;
        this.location=location;
    }
}