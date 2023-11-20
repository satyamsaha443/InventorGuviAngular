import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import Category from 'src/app/main/models/Category';
import Stock from 'src/app/main/models/Stock';
import Supplier from 'src/app/main/models/Supplier';
import { HTTPService } from 'src/app/main/services/HTTPService';
import ProductValidation from 'src/app/main/validations/ProductValidation';
import ProductTestService from 'src/app/main/mocks/ProductTestService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent extends URLLoader implements OnInit {

  productForm: FormGroup
  msg: ProductMessage
  submitted = false
  categories$!:Category[]
  suppliers$!:Supplier[]
  stocks$!:Stock[]

  get f() { return this.productForm.controls; }

  constructor(private router:Router,
    private httpService:HTTPService ,
    private validation: ProductValidation, 
    private message: ProductMessage,
    private ProductTestService: ProductTestService) 
    {
    super()
    this.productForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    this.getAllCategories()
    this.getAllSupplies()
    this.getAllStocks()
  }

  reset() {
    this.productForm.reset()
  }

  
  add() {
    this.productForm.value.category_id=this.categories$.filter(x => 
    x.id == parseInt(this.productForm.value.category_id))[0]

    this.productForm.value.supplier_id=this.suppliers$.filter(x => 
    x.id == parseInt(this.productForm.value.supplier_id))[0]
  
    this.submitted = true;
   
    if (this.validation.checkValidation()) {     
       this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/api/products/create",this.productForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success') 
      window.location.reload();
    }
  }

  getAllCategories() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/categories/all")
     .subscribe((data:object)=>{
       this.categories$=data as Category[];
     })
  }

   getAllSupplies() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/suppliers/all")
     .subscribe((data:any)=>{
       this.suppliers$=data as Supplier[];
       
     })
  }

  getAllStocks() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/warehouses/all")
     .subscribe((data:any)=>{
       this.stocks$=data as Stock[];
       
     })
  }
}