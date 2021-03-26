import { Flower } from "../models/flower.model";

export class FlowerService{
    flowers:Flower[];
    constructor(){
        this.flowers = [
            new Flower(1,"Rose","All color rose",'./assets/images/Flower1.jfif'),
            new Flower(2,"Orchid","Lavender o violet color",'./assets/images/Flower2.jfif'),
            new Flower(3,"Lilly","White or red",'./assets/images/Flower3.jfif')
        ]
    }
    getAllFowers(){
        return this.flowers;
    }
    getFlowerById(id:number):Flower{
        var flower:Flower;
        for (let index = 0; index < this.flowers.length; index++) {
            if(this.flowers[index].id == id)
            {
                flower = this.flowers[index];
                break;
            }
        }
        return flower;
    }
}