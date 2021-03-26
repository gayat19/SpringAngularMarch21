
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flower } from '../models/flower.model';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
flowers:Flower[];
  constructor(private flowerService:FlowerService,private router:Router) {
    this.flowers = this.flowerService.getAllFowers();
   }

   showMore(fid){
     //console.log(id);
     this.router.navigate(['/home/flowers/flower',fid]);
   }

  ngOnInit(): void {
  }

}
