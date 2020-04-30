import {  NgModule} from "@angular/core";
import { CrudComponent } from "./crud/crud.component";
import { SampleComponent } from "./crud/sample/sample.component";
import { UploadComponent } from "./crud/upload/upload.component";
import{ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:[BrowserModule,ReactiveFormsModule,RouterModule],
  declarations:[
    SampleComponent,
    UploadComponent,
    CrudComponent

  ],
  exports:[CrudComponent,UploadComponent,SampleComponent]
})

export class SharedModule {

}
