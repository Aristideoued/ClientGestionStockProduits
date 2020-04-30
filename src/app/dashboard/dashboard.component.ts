import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product/shared/service/product.service";
import { UserService } from "../user/shared/service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



 productData={
   labels:[],
   datasets:[ ]
    };

    usersData={
      labels:[],
      datasets:[ ]
       };


  constructor(private productService:ProductService,private userService:UserService) { }

  ngOnInit(){

       const datasetQuantite={
         label:"Quantité",
         data:[],
         backgroundColor:'rgba(255,200,85,0.2)',
         borderColor:'rgb(255,99,132)'
       };

       const datasetPrixUnitaire={
         label:"Prix Unitaire",
         data:[],
         backgroundColor:'rgba(153,102,255,0.2)',
         borderColor:'rgb(255,99,132)'
       };

       this.productService.getAll().subscribe(list=>list.forEach(product =>{
         this.productData.labels.push(product.ref);
         datasetQuantite.data.push(product.quantite);
         datasetPrixUnitaire.data.push(product.prixUnitaire);
       } ));

       this.productData.datasets.push(datasetQuantite);
       this.productData.datasets.push(datasetPrixUnitaire);


              const datasetUser={
                label:"Roles",
                data:[],
                backgroundColor:'rgba(153,102,255,0.2)',
                borderColor:'rgb(255,99,132)'
              };

        this.usersData.datasets.push(datasetUser);
        this.usersData.labels.push('ROLE_ADMIN');
        this.usersData.labels.push('ROLE_USER');


       this.userService.getAll().subscribe(list=>{
            let adminLength=0;

           list.forEach(user => user.roles.forEach(role=>{if(role.name=='ROLE_ADMIN'){
              adminLength++;
           }}
         ));

         datasetUser.data.push(adminLength);

                let userLength=0;

           list.forEach(user => user.roles.forEach(role=>{if(role.name=='ROLE_USER'){
              userLength++;
           }}));


       datasetUser.data.push(userLength);
       }

     );

}

}
