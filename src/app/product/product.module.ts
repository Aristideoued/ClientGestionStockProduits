import {  NgModule} from "@angular/core";
import { ProductComponent } from "./product.component";
import{ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
@NgModule({
      imports:[ReactiveFormsModule,SharedModule],
  declarations:[

    ProductComponent
  ]
})

export class ProductModule {

}
