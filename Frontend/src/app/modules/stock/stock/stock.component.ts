import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Stock from 'src/app/main/models/Stock';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  stock$:Stock[]=[{
        "id": 1,
        "name": "",
        "status": "",
        "details": ""
    }]
  constructor(private httpService:HTTPService) {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
 this.getAll()
}

 getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/warehouses/all")
     .subscribe((data:any)=>{
       this.stock$=data as Stock[];
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}