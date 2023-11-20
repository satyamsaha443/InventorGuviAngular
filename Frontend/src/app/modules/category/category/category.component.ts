import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import CategoryMessage from 'src/app/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/main/mocks/CategoryTestService';
import Category from 'src/app/main/models/Category';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends URLLoader implements OnInit {

  categorys$:Category[]=[{
        "id": 0,
        "category_name": "",
        "status_id": "",
        "category_details": ""
    }]
  id = 0


  constructor(private httpService:HTTPService,
    private categoryTestService: CategoryTestService,
     private messageService: CategoryMessage) {
    super()

  }

  setId(id: number) {
    this.id = id
  }

  edit(id: any) {
    this.setId(id)
  }

  delete(id:any) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
      this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/categories/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/categories/all")
     .subscribe((data:any)=>{
       this.categorys$=data as Category[]; 
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}
