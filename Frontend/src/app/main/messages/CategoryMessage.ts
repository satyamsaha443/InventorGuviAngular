import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class CategoryMessage {

    confirmations = {
        'title': 'confirmation',
        'add': 'Category has been added',
        'edit': '--',
        'delete': 'Category has been removed'
    }
    validations = {
           "category_name": "Category name is required",
        "status_id": "Status is required",
        "category_details": "details is required"
    }

    constructor() {

    }
}