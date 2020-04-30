import { Component, OnInit,ViewChild,Input,Output,EventEmitter } from '@angular/core';
import { DataModel } from "../../data.model";
import { CrudService } from "../../crud.service";
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
   @ViewChild("fileUploadInput",{static:true})
   fileUploadInput:any;

   @Input()
   dataModelList:DataModel[];

   @Input()
   service:CrudService;

   @Output()
   updateData:EventEmitter<any>=new EventEmitter<any>();

  @Input()
   dataModelListFiltred:DataModel[];

   fileName:string='';

   currentStep=1;

   selectedStep=1;


   dataFromServer:any=null;
   dataSentToServer:boolean=false;
   dataArray:any=null;
  constructor() { }

  ngOnInit() {
    this.dataModelListFiltred=this.dataModelList.filter(dataModel=>!dataModel.readonly);
  }
  getbindHeadersDataModeListArray(headers){
    let bindArray=[];
    let index=0;
    let getDataType=(header)=>{
      let dataType='';
      this.dataModelList.forEach(dataModel=>{
        if(dataModel.columnName==header){
          dataType=dataModel.dataType;
        }

      });
        return dataType;
    }
    headers.forEach(header => {
      const bindItem={
        columnName:header,
        dataType:getDataType(header),
        index:index
      }
     index++;
     bindArray.push(bindItem)
    });
    return bindArray;
  }


  buildDataArray(bindArray,csvRecordsArray){
     let dataArray=[];
     if(csvRecordsArray &&  csvRecordsArray.length>2){
          for(let i=1;i<csvRecordsArray.length;i++){
            const dataCsv=csvRecordsArray[i].split(';');
            const dataCrud={};

         bindArray.forEach(bindItem=>{
         dataCrud[bindItem.columnName]=bindItem.dataType=='number' ?  Number(dataCsv[bindItem.index]):dataCsv[bindItem.index];
       });
       dataArray.push(dataCrud);
          }

     }
     return dataArray;

  }
selectFile($event){
  let fileList=$event.srcElement.files;
  let file=fileList[0];
  if(file && file.name.endsWith('.csv')){
    this.fileName=file.name;
    let input=$event.target;
    let reader=new FileReader();
    reader.readAsText(input.files[0])
    reader.onload=(data)=>{
     let csvData=<string>reader.result;
     let csvRecordsArray=csvData.split(/\r\n|\n/);
     let headers=csvRecordsArray && csvRecordsArray.length>0?csvRecordsArray[0].split(";"):[];
      //bing headers with dataModelList(liaison)
      let bindArray=this.getbindHeadersDataModeListArray(headers);

      //create DataArray
      this.dataArray=this.buildDataArray(bindArray,csvRecordsArray);
      this.currentStep++;


    }
  }
}
sendDataToserver(){
  this.service.addAll(this.dataArray).subscribe((data)=>{
  this.dataFromServer=data;
    this.dataSentToServer=true;
    this.updateData.emit(data);
    this.currentStep=3;


  })

}
}