import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import ExpenseTestService from 'src/app/main/mocks/ExpenseTestService';
import Expense from 'src/app/main/models/Expense';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent extends URLLoader implements OnInit {


  expenses$:any
  id = 0


  constructor(private httpService:HTTPService,
    private expenseTestService: ExpenseTestService,
     private messageService: ExpenseMessage) {
      super()

    }
  
  setId(id:any) {
    this.id = id
  }

  edit(id:any) {
    this.setId(id)
    this.expenseTestService.ID.next(id.toString())
  }

  delete(id:any) {
    var r = confirm("Are you sure you want to delete this record ?");
    if (r) {
      this.setId(id)
       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/expenses/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
      window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/expenses/all")
     .subscribe((data:Object)=>{
       this.expenses$=data as Expense[];
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}