import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import Employee from 'src/app/main/models/Employee';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent extends URLLoader implements OnInit {

  
  
  employees$:Employee[]=[{
    "id":0,
    "employee_fname": "",
        "employee_email": "",
        "employee_phone": "",
        "employee_gender": "",
        "employee_nid": "",
        "status_id": "",
        "employee_birthday": "",
        "employee_address": "",
        "employee_salary": ""

  }]
  id = 0


  constructor(private httpService:HTTPService,private employeeTestService: EmployeeTestService, private messageService: EmployeeMessage) {
    super()

  }

  setId(id:any) {
    this.id = id
  }

  edit(id:any) {
    this.setId(id)
    this.employeeTestService.ID.next(id.toString())
  }

  delete(id:any) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
      this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/employees/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
     }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  
  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/employees/all")
     .subscribe((data:object)=>{
       this.employees$=data as Employee[];
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}