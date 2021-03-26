import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
customerName:string;
checkClass:string;
toggleStatus:boolean;
  constructor() {
    this.customerName = "Somu";
    this.checkClass= "customerColor";
    this.toggleStatus = true;
   }


   Clicked(custName){
     console.log(custName.value);;
   }

   toggleColor(){
    this.toggleStatus = !this.toggleStatus;
    if(this.toggleStatus)
      this.checkClass = "one";
    else
      this.checkClass = "two";
   }

}
