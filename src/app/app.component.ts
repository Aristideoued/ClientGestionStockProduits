import { Component,OnInit } from '@angular/core';
import { AppService } from "./authentication/shared/service/app.service";
import {  Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHideSideBar:boolean=false;

  title = 'ClientGestionStockProduits';

constructor(private appservice:AppService,private router:Router){

}


  ngOnInit(){
    if(!this.appservice.authenticated){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/home']);
    }
  }
  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar=showHideSideBar;  }

}
