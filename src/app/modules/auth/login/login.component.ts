import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { signIn } from '../auth_model/authModel';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
  });
  vmLogin: signIn = {

    id: 0 ,
    fullname: "",
    active: true,
    admin: false,
  };
  get email(){
    return this.loginForm.get("email")?.value;
  }
  get password(){
    return this.loginForm.get("password")?.value;
  }
 res: any;
  constructor(private AuthAPI: AuthService, private _route: Router) { }

  login(): void {
    this.AuthAPI.sign_in(this.email, this.password).subscribe(res=>{
      if (res['admin'] == true) {
        alert("Dang nhap thanh cong!");
        this._route.navigate(['/addresses'])
      }
      else if (res['admin'] == false && res['active'] == true) {
        alert("Dang nhap thanh cong!");
        this._route.navigate(['/home'])
      }
      else
        alert("Dang nhap khong thanh cong!");
      return res;

    })
  }
  ngOnInit() {}
  mappingModel(response: ResponseLogin) {
    return {}
  }
}
export interface ResponseLogin {

}
