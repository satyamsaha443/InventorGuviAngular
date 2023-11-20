import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class SellMessage {

    confirmations = {
        'title': 'confirmation',
         'add': 'Sale has been added',
        'edit': '---',
        'delete': 'Sale has been removed'
    }
    validations = {
       "customer_id": "Customer is required",
       "customer_name":"s",
        "sale_date": "Date is required",
        "sale_status": "Status is required",
        "sale_invoiceNo": "Invoice No is required"
    }

    constructor() {

    }
}