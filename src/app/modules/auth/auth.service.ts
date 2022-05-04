import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './auth_model/userModel';

@Injectable()
export class AuthService {
    private httpOption = {
        headers: new HttpHeaders({
        }),
      }
    constructor(private http: HttpClient) { }
    public sign_in(email: any, password:any):Observable<any> {
        const url = 'http://localhost:8080/users/sign_in';
         let body = {
           email: email,
           password: password,
        }
        return this.http.post(url,body,this.httpOption,)
      }

    public sign_up(user: UserModel):Observable<any> {
        const url = 'http://localhost:8080/users/sign_in';

        return this.http.post(url,user,this.httpOption,)
      }
    
    public sign_out():Observable<any>{
        const url = 'http://localhost:8080/users/sign_out';
        let body = {
        }
        const token = localStorage.getItem('key');
        return this.http.post(url,null,{
          headers:{
            Authorization:'Bearer ' + token
          }
        })
      }
}
