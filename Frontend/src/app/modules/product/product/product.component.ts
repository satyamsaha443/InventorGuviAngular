import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import ProductTestService from 'src/app/main/mocks/ProductTestService';
import Product from 'src/app/main/models/Product';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends URLLoader implements OnInit {

 
  // products$:Product[]=[{
  //       "id": 1,
  //       "product_name": "",
  //       "category_id": "",
  //       "supplier_id": "",
  //       "product_unit": "",
  //       "product_alertquantity": "",
  //       "product_supplierPrice": "",
  //       "product_sellPrice": "",
  //       "product_code": "",
  //       "product_tax": "",
  //       "warehouse_id": "",
  //       "product_details": "",
  //       "product_detailsforinvoice": ""
  //   }]
  id = 0
  products:any


  constructor(private router:Router, 
    private httpService:HTTPService,
    private productTestService: ProductTestService, 
    private messageService: ProductMessage) {
    super()

  }

  setId(id:number) {
    this.id = id
  }

  edit(id:any) {
    this.setId(id)
    this.productTestService.ID.next(id.toString())
  }

  delete(id:any) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
      //this.productTestService.remove(parseInt(id))
      this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/products/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/products/all")
     .subscribe((data:any)=>{
      console.log(data);
      
       this.products=data ;
      
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}