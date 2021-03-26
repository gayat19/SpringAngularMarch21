import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {User} from '../user/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  myForm:FormGroup
  constructor(private userService:UserService,private route:Router) { 
    this.user = new User();
    this.myForm = new FormGroup({
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    });
  }

public get username()  {
  return this.myForm.get("username");
}
public get password()  {
  return this.myForm.get("password");
}
  ngOnInit(): void {
  }

  login(){
    //console.log(username)
    // if(this.userService.checkLogin(this.user))
    //     this.route.navigate(['/home'])
    // else
    //     console.log("Incorrect username or password");
    if(this.myForm.valid)
    {
      this.route.navigate(['/home']);
    }
  }

}
