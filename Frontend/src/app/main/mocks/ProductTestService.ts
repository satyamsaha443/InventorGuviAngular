import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";


@Injectable({
    providedIn: 'root'
})
export default class ProductTestService implements Service {
    public ID = new BehaviorSubject<string | null>(null);
    static _product = [{
        "id": 1,
        "product_name": "IPhone 6s",
        "category_id": "appliances",
        "supplier_id": "RodeoAwards",
        "product_unit": "string",
        "product_alertquantity": "string",
        "product_supplierPrice": "string",
        "product_sellPrice": "2330",
        "product_code": "string",
        "product_tax": "string",
        "warehouse_id": "string",
        "product_details": "string",
        "product_detailsforinvoice": "string"
    }]

    static id = 0

    public getAll() {
        return ProductTestService._product;
    }

    public get(id:any) {
        return ProductTestService._product.find(item => item.id === id);
    };

    public create(data:any) {
        data["id"] = ProductTestService.id
        ProductTestService._product.push(data);
        ProductTestService.id++;
        console.log(data);
    };

    public update(data:any) {
        var foundIndex = ProductTestService._product.findIndex(item => item.id === data.id);
        ProductTestService._product[foundIndex] = data;
    };

    public remove(id:any) {
        ProductTestService._product.splice(id, 1);
    };
}