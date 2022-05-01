import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Language, Product, Publisher, User, Order, Cart } from '../models/api.model';

const apiUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private httpClient: HttpClient) { }

  getAllCart():Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(apiUrl + '/carts/').pipe(
    )
  }

  getAllCategory():Observable<Category[]>{
    return this.httpClient.get<Category[]>(apiUrl + '/categories/').pipe(
    )
  }

  getAllLanguage(): Observable<Language[]>{
    return this.httpClient.get<Language[]>(apiUrl + '/languages/').pipe(
    )
  }

  getAllOrder(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(apiUrl + '/orders/').pipe()
  }

  getAllProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(apiUrl + '/products/').pipe(
    )
  }

  getAllPublisher(): Observable<Publisher[]>{
    return this.httpClient.get<Publisher[]>(apiUrl + '/publishers/').pipe(
    )
  }

  getAllUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(apiUrl + '/users/').pipe(
    )
  }
}
