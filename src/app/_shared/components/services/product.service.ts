import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  create(body: any): Observable<any> {
    return this.http.post(this.url, body)
  }

  update(id: any, body): Observable<any> {
    return this.http.put(`${this.url}/${id}`, body)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  findOne(id): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }

}
