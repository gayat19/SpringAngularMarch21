
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ErrorComponent } from './error/error.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowersComponent } from './flowers/flowers.component';
import { LandingComponent } from './landing/landing.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'home',component:MenuComponent,children:[
        {path:'users',component:ListUsersComponent},
        {path:'customer',component:CustomerComponent},
        {path:'post',component:PostComponent},
        {path:'flowers',component:FlowersComponent,children:[
                {path:'flower/:id',component:FlowerComponent} //parameter for a route
        ]}
  ]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
