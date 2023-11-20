import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ClientMessage from 'src/app/main/messages/ClientMessage';
import ClientTestService from 'src/app/main/mocks/ClientTestService';
import Client from 'src/app/main/models/Client';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends URLLoader implements OnInit {


  clients$:Client[]=[{
        "id": 1, "customer_name": "", "customer_email": "",
        "customer_phone": "", "customer_address": "",
        "status_id": "", "customer_description": ""
    }]
  id = 0


  constructor(private httpService:HTTPService , private messageService: ClientMessage) {
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
      this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/clients/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/clients/all")
     .subscribe((data:any)=>{
       this.clients$=data as Client[];
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}