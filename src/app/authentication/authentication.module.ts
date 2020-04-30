import {  NgModule} from "@angular/core";
import{ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from "./login/login.component";
import { RouterModule } from '@angular/router';
@NgModule({
  imports:[BrowserModule,ReactiveFormsModule],
  declarations:[
    LoginComponent
  ]
})

export class AuthenticationModule {

}
