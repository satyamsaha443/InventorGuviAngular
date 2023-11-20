import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class CategoryTestService implements Service {
     public ID = new BehaviorSubject<string | null>(null);
    static _category = [{
        "id": 0,
        "category_name": "électroménager",
        "status_id": "Active",
        "category_details": ""
    }]
    static id = 0

    public getAll() {
        return CategoryTestService._category;
    }

    public get(id:any) {
        return CategoryTestService._category.find(item => item.id === id);
    };

    public create(data:any) {
        data["id"] = CategoryTestService.id
        CategoryTestService._category.push(data);
        CategoryTestService.id++
    };

    public update(data:any) {

        var foundIndex = CategoryTestService._category.findIndex(item => item.id === data.id);
        CategoryTestService._category[foundIndex] = data;
    };

    public remove(id:any) {
        CategoryTestService._category.splice(id, 1);
    };


}