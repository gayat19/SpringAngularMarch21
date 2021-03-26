import { Url } from "url";


export class Flower{
    id:number;
    name:string;
    pic:Url;
    description:string;
    constructor(id?,name?,desc?,pic?){
        this.id = id;
        this.name = name;
        this.pic = pic;
        this.description = desc;
    }
}