import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  

  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient){}


  getOrders(){
    return this.http.get(this.apiUrl);
  }


  deleteOrder(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
