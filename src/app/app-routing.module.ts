import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ ProductComponent} from './product/product.component';
import{DashboardComponent} from './dashboard/dashboard.component'
import { ProductResolver } from "./product/shared/service/product.resolver.service";
import { UserResolver } from "./user/shared/service/user.resolver.service";
import { LoginComponent } from "./authentication/login/login.component";
import { HomeComponent } from "./home/home.component";
import{UserComponent} from './user/user.component'


export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'home',
    component:HomeComponent,
    children:[
          {
            path:'',
            component:ProductComponent,outlet:'homeOutlet',
           resolve:{
             products:ProductResolver
           }},






       ]},
       {
         path:'dashboard',
         component:DashboardComponent,outlet:'homeOutlet'

       },

       {
         path:'user',
         component:UserComponent,outlet:'homeOutlet',
         resolve:{
           users:UserResolver
         }},



  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule],
  providers:[ProductResolver,UserResolver]
})
export class AppRoutingModule { }
