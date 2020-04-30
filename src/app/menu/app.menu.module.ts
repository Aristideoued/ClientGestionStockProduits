import {  NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';
import {SidebarComponent  } from "./sidebar/sidebar.component";

@NgModule({
  imports:[RouterModule,BrowserModule],
  declarations:[
    NavbarComponent,
    SidebarComponent

  ],
  exports:[SidebarComponent,NavbarComponent]
})

export class AppMenuModule {

}
