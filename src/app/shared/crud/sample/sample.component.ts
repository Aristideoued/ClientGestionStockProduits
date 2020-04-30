import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';
import { CrudService } from "../../crud.service";
import { DataModel } from "../../data.model";


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  @Input()
  title:string;

  @Input()
  data:any;

  @Input()
  service:CrudService;

  @Input()
  initItem:any;

  @Input()
  initForm:FormGroup;

  @Input()
  dataModelList: DataModel[]

  crudForm:FormGroup;

  operation: string='add'

  seletedItem:any;
    constructor(private fb:FormBuilder
    ) {
    this.createForm();
    }

    ngOnInit(){

      this.init();

    }
  createForm(){
    this.initForm?this.crudForm=this.initForm:this.crudForm=this.fb.group({});
    }


  loadData(){
    this.service.getAll().subscribe(
      data=>{this.data=data},
      error=>{console.log('An error was occured.')},
      ()=>{console.log('loading data was done')}

    );

  }
  add(){
    const p=this.crudForm.value;
    this.service.add(p).subscribe(
      res=>{
        this.init()
         this.loadData();

      }
    );
  }
  update(){
    this.service.update(this.seletedItem).subscribe(
      res=>{
        this.init();
         this.loadData();

      }
    );
  }
  init(){

    this.seletedItem=this.initItem;
    this.createForm();
  }
  delete(){
  this.service.delete(this.seletedItem.id).subscribe(
    res=>{
    this.seletedItem= this.initItem;
    this.loadData();

    }
  );
  }

}
