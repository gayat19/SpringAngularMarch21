import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  message:string;
  constructor(private userService:UserService) { 
    this.user = new User();
  }

  addUser(){
    this.userService.addUser(this.user);
    this.message = "User Registered";
    this.user = new User();
  }
  reset(){
    this.user = new User();
  }
  ngOnInit(): void {
  }

}
