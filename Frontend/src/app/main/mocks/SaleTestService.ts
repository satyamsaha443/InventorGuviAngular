import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class SaleTestService implements Service {
    public ID = new BehaviorSubject<string | null>(null);
    static _sale = [{
        id: 1,
        customer_id: {
          id: 123,
          customer_name: 'John Doe',
          customer_phone: '555-555-5555',
          customer_address: '123 Main St',
          customer_email: 'jdoe@example.com',
          status_id: 2,
          customer_description: 'A loyal customer'
        },
        sale_date: '2021-10-15',
        sale_status: 'complete',
        sale_invoiceNo: 'ABC123'
      }];


    static id = 0

    public getAll() {
        return SaleTestService._sale;
    }

    public get(id:any) {
        return SaleTestService._sale.find(item => item.id === id);
    };

    public create(data:any) {
        data["id"] = SaleTestService.id
        SaleTestService._sale.push(data);
        SaleTestService.id++
        console.log(data)
    };

    public update(data:any) {

        var foundIndex = SaleTestService._sale.findIndex(item => item.id === data.id);
        SaleTestService._sale[foundIndex] = data;
    };

    public remove(id:any) {
        SaleTestService._sale.splice(id, 1);
    };


}