import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerComponent} from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowerService } from './services/flower.service';
import { ErrorComponent } from './error/error.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    UserComponent,
    LoginComponent,
    ListUsersComponent,
    RegisterComponent,
    LandingComponent,
    MenuComponent,
    FlowersComponent,
    FlowerComponent,
    ErrorComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [UserService,FlowerService,PostService],//Singlleton instance of the service is created and maintained by the provider
  bootstrap: [AppComponent]
})
export class AppModule { }
