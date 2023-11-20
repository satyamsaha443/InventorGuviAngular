
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HTTPService  {
    getById(arg0: string) {
      throw new Error('Method not implemented.');
    }

    

    headers = { 'content-type': 'application/json' }
    model = ''
    constructor(private http: HttpClient) {
    }
    async update(url:string,data:any) {
        await this.http.put(url,data)
    }
    getAll(url:string) {
        const header=new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
        return this.http.get(url,{headers:header});
    }
    get(id: string) {
        return this.http.get(id);
    }
    async create(url:string,data:any) {

        const body = JSON.stringify(data);
        const headers = new HttpHeaders({ 'content-type': 'application/json',Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) } )
        await this.http.post(url, body,
            { 'headers': headers }).toPromise();
    }
    async remove(url:string) {
         const headers = new HttpHeaders({ 'content-type': 'application/json',Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) } )
        await this.http.delete(url, {
            headers: headers
        }).toPromise();
    }


}