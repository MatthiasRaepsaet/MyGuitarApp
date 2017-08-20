import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login-component';
import {RouterModule} from '@angular/router';
import {UsersService} from "./services/users.service";
import {AlertComponent} from "./alert/alert.component";
import { HomeComponent } from './home/home.component';
import { MyGuitarsComponent } from './my-guitars/my-guitars.component';
import { GuitarshopComponent } from './guitarshop/guitarshop.component';
import {GuitarsService} from "./services/guitars.service";
import { DetailComponent } from './detail/detail.component';
import {RegisterComponent} from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    MyGuitarsComponent,
    GuitarshopComponent,
    DetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'guitarshop',
        component: GuitarshopComponent
      },
      {
        path: 'my-guitars',
        component: MyGuitarsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
    HttpModule
  ],
  providers: [UsersService, GuitarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
