import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flower } from '../models/flower.model';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {


  flower:Flower;

  constructor(private activeRoute:ActivatedRoute,private flowerService:FlowerService) { 
    var id:number;
    //id = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe(params=>{
      //id = this.activeRoute.snapshot.params['id'];
      id = params["id"];
      this.flower = this.flowerService.getFlowerById(id);
    })
    
     //console.log(this.flower)
  }


  ngOnInit(): void {
  }

}
