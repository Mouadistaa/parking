import { toSlug } from "../utils/toSlug";

class City{
    id : number;
    name : string;
    slug : string;
    parkingsIds:number[];
    country:string;
    location :GPS;
    constructor(id:number,name:string,parkings :number[],country:string,location:GPS){
        this.id=id;
        this.name=name;
        this.slug=toSlug("name");
        this.parkingsIds=parkings;
        this.country=country;
        this.location=location;
    }
}