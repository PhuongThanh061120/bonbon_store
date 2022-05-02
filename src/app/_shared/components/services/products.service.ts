import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  findOne(id): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }

}
