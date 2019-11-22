import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as xlsx from 'xlsx'; 


@Component({
  selector: 'app-excel-list',
  templateUrl: './excel-list.component.html',
  styleUrls: ['./excel-list.component.css']
})
export class ExcelListComponent implements OnInit {
  
  title = 'Sååågeti excel calculator';
  fileToUpload: File = null;
  excel1: any[];  
  excel2: any[];
  excel3: any[];

  ngOnInit() {
  }

  constructor(){  

  }  
  
  changeListener($event): void {
    this.handleFileInput($event.target);
  }
  handleFileInput(inputValue: any) {
    var file: File = inputValue.files[0];
    var reader: FileReader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend =  (e) =>{
      var buffer = reader.result;
      var bytes = new Uint8Array(<ArrayBuffer>buffer);
      var wb = xlsx.read(bytes, {type:'array'});
      var worksheet = wb.Sheets["Prospect att bemanna"];

     var worksheetJson = xlsx.utils.sheet_to_json(worksheet);


     if(inputValue.id == "file"){
      this.excel1 = worksheetJson;
     }
     if(inputValue.id == "file2"){
      this.excel2 = worksheetJson;
     }
    
  
     
    }
}
submit(): void {
  var json = []; 
  for(var y in this.excel2){
    var contains = false;
    for(var x in this.excel1){
      if(this.excel2[y].Nr == this.excel1[x].Nr){
        contains = true;
        break;
      }
    }
    if(contains == false){
      json.push(this.excel2[y])
    }
  }
  this.excel3 = json;
}


}
