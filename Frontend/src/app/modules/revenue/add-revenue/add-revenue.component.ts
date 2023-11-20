import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import RevenueMessage from 'src/app/main/messages/RevenueMessage';
import Client from 'src/app/main/models/Client';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

import RevenueTestService from 'src/app/main/mocks/RevenueTestService';
import RevenueValidation from 'src/app/main/validations/RevenueValidation';

@Component({
  selector: 'app-add-revenue',
  templateUrl: './add-revenue.component.html',
  styleUrls: ['./add-revenue.component.css']
})
export class AddRevenueComponent extends URLLoader implements OnInit {

  revenueForm: FormGroup
  msg: RevenueMessage
  submitted = false
  clients$:Client[]=[]

  get f() { return this.revenueForm.controls; }

  constructor(private httpService:HTTPService,  
     private validation: RevenueValidation, 
     private message: RevenueMessage, 
     private RevenueTestService: RevenueTestService) {
    super()
    this.revenueForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    this.getAllClients()
  }

  reset() {
    this.revenueForm.reset()
  }

    getAllClients() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/clients/all")
     .subscribe((data:any)=>{
       this.clients$=data as Client[];
      
     })
    }


  add() {
    this.submitted = true;
    
    this.revenueForm.value.customer_id=this.clients$.filter(x => 
    x.id == parseInt(this.revenueForm.value.customer_id))[0]
  
    if (this.validation.checkValidation()) {
      this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/api/revenues/create",this.revenueForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')
      window.location.reload();
    }
  }


}