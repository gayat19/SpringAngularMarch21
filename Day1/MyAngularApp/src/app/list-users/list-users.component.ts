import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
users:User[];
  constructor(private userService:UserService) {
      this.users = this.userService.getAllUsers();
      console.log(this.users);
   }

  ngOnInit(): void {
  }

}
