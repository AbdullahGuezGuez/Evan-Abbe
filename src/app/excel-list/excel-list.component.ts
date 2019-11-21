import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  


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
  
  
  handleFileInput(files: FileList) {

    this.fileToUpload = files.item(0);

  console.log(this.fileToUpload);

}

}
