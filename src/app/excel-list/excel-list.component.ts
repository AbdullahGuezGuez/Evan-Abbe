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
  excel: any[];  

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
     console.log(worksheetJson);
     this.excel = worksheetJson;
    }


   // var workbook = xlsx.readFile(this.fileToUpload.name);

    
  
}

}
