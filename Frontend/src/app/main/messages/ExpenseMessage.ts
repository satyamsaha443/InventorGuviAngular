import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ExpenseMessage {

    confirmations = {
        'title': 'Confirmation', 
        'add': 'Expense has been added',
        'edit': 'Expense has been successfully modified',
        'delete': 'Expense has been removed'
    }

    validations = {
        id: 1,
        "expense_paymentDate": "Payment date is required",
        "supplier_id": "Supplier is required",
        "expense_paymentType": "Payment type is required",
        "expense_paymentAccount": "Payment account is required",
        "expense_amount": "Amount is required",
        "expense_details": ""
    }

    constructor() {}
}