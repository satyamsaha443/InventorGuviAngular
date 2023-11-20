import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import SupplierMessage from 'src/app/main/messages/SupplierMessage';
import SupplierTestService from 'src/app/main/mocks/SupplierTestService';
import Supplier from 'src/app/main/models/Supplier';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends URLLoader implements OnInit {

supplierForm !: FormGroup;
  
  suppliers$:Supplier[]=[{ "id": 1,
        "supplier_name": "",
        "supplier_phone": "",
        "supplier_email": "",
        "supplier_company": "",
        "supplier_address": "",
        "status_id": "",
        "supplier_description": ""}]
  id = 0


  constructor(private httpService:HTTPService, private supplierTestService: SupplierTestService, private messageService: SupplierMessage) {
    super()

  }

  setId(id:any) {
    this.id = id
  }

  edit(id:any) {
    this.setId(id)
    this.supplierTestService.ID.next(id.toString())
  }

  delete(id:any) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
     this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/suppliers/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
      window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
    this.supplierForm= new FormGroup({
      supplier_name: new FormControl(''),
      supplier_phone:new FormControl('')
    });
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/suppliers/all")
     .subscribe((data:any)=>{
      console.log(data);
      
       this.suppliers$= data ;
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}