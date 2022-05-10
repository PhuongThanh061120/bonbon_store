import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  create(body: any): Observable<any> {
    return this.http.post(this.url, body)
  }

  update(id: any, body): Observable<any> {
    return this.http.put(`${this.url}/${id}`, body)
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  findOne(id): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }

  change(id, body): Observable<any> {
    return this.http.put(`${this.url}/status/${id}`, body,  {responseType:'text'});
  }

}
