import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BuyMessage from 'src/app/main/messages/BuyMessage';
import BuyTestService from 'src/app/main/mocks/BuyTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { HttpErrorResponse } from '@angular/common/http';
import Buy from 'src/app/main/models/Buy';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  buys$:any
  id = 0


  constructor(private httpService:HTTPService, 
     private messageService: BuyMessage) {
    super()

  }

  setId(id:any) {
    this.id = id
  }

  edit(id:any) {
    this.setId(id)
    
  }

  delete(id:any) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/buys/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/buys/all")
     .subscribe((data:any)=>{
       this.buys$=data as Buy[];
       console.log(this.buys$)
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

  
}
