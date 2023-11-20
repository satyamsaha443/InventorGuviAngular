export default interface Service {
    getAll():any[];
    get(id:number):any;
    create(data:any): void;
    update(old:any, data:any):void;

    remove(id:number): void;
}