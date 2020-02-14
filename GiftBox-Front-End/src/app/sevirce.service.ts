import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SevirceService {

  constructor(private http: HttpClient) { }

  placeOrder = 'http://168.172.187.142:5000/d';
  orders_url = 'http://168.172.187.142:5000/allOrders';

  register_url = 'http://168.172.189.22:1000/register';

  public getOrders()
  {
     return this.http.get<any>(this.orders_url);
  }

  
  public addOrder(order)
  {
    return this.http.post<any>(this.placeOrder, order, {});
  } 

  public addRegister(register)
  {
    return this.http.post<any>(this.register_url, register, {});
  } 

}
