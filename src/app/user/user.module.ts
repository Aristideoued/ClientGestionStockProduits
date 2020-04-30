import {  NgModule} from "@angular/core";
import { UserComponent } from "./user.component";
import{ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "../shared/shared.module";
@NgModule({
    imports:[ReactiveFormsModule,SharedModule],
  declarations:[
    UserComponent
  ]
})

export class UserModule {

}
