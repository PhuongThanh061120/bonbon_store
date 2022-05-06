import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "http://localhost:8080/orders/2";

  constructor(private http: HttpClient) { }

  order(data: any): Observable<any> {
    return this.http.post(this.url, data)
  }

}
