

import {  NgModule} from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { MyChartComponent } from "./my-chart/my-chart.component";
import {ChartModule  } from "angular2-chartjs";
import{ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:[ChartModule],
  declarations:[
    DashboardComponent,
    MyChartComponent
  ],

})


export class DashboardModule {

}
