import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  myData
  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }
  getData(){
    console.log("Cehck")
      this.postService.getPostsData().subscribe(somedata=>{
        this.myData = somedata;
      })
  }
}
