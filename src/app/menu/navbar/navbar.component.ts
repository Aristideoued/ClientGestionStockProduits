import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import {  Router} from "@angular/router";

import { AppService } from "../../authentication/shared/service/app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  showSideBar:boolean;

  @Output()
  showSideBarChange:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(private appservice:AppService,private router:Router) { }

  ngOnInit(){
  }
  afficherSideBar(){
    this.showSideBar=!this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }
  logout(){
this.appservice.logout(()=>{
  this.router.navigateByUrl('/login')
});
  }

}
