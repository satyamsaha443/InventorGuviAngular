import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class StockTestService implements Service {
    public ID = new BehaviorSubject<string | null>(null);
    static _stock = []
    static id = 0

    public getAll() {
        return StockTestService._stock;
    }

    public get(id:any) {
        return StockTestService._stock.find(item => item.id === id);
    };

    public create(data:any) {
        data["id"] = StockTestService.id
        StockTestService._stock.push(data);
        StockTestService.id++
    };

    public update(data:any) {

        var foundIndex = StockTestService._stock.findIndex(item => item.id === data.id);
        StockTestService._stock[foundIndex] = data;
    };

    public remove(id:any) {
        StockTestService._stock.splice(id, 1);
    };


}