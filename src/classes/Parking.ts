class Parking{
    id : number;
    name : string;
    city_id : number;
    opened:boolean;
    numberOfSpots:number;
    location :GPS;
    hourlyRate: number;
    parkIds: number[];
    
    constructor(id:number,name:string,city_id :number,location:GPS,numberOfSpots:number,hourlyRate: number,parkIds: number[],opened:boolean){
        this.id=id;
        this.name=name;
        this.location=location;
        this.city_id=city_id;
        this.opened=opened;
        this.numberOfSpots=numberOfSpots;
        this.hourlyRate=hourlyRate;
        this.parkIds=parkIds;
    }
}