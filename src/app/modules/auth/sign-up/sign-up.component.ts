import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../auth_model/userModel';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  vmSignup: UserModel = {
    first_name: '',
    last_name: '',
    phone_number: null,
    address: '',
    address_description: '',
    email: '',
    password: '',
  }
  signupForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(20)]),
    phone_number: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    address_description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  })
  get first_name(){
    return this.signupForm.get("first_name");
  } 
  get last_name(){
    return this.signupForm.get("last_name");
  }
  get email(){
    return this.signupForm.get("email");
  }
  get phone_number(){
    return this.signupForm.get("company");
  } 
  get position(){
    return this.signupForm.get("position");
  }
  get purpose(){
    return this.signupForm.get("purpose");
  }
  get password(){
    return this.signupForm.get("password");
  }

  constructor( private UserAPI: AuthService , private _route: Router) { }

  get f(){
    return this.signupForm.controls;
  }
  public signup(){

      this.UserAPI.sign_up({
        first_name: this.f.first_name.value,
        last_name: this.f.last_name.value,
        phone_number: this.f.phone_number.value,
        address: this.f.address.value,
        address_description: this.f.address_description.value,
        email: this.f.email.value,
        password: this.f.password.value,
      }).subscribe((res:any) =>{
        console.log(res)
        if (res['code'] == 200 ) {
          alert(res["message"]);
          this._route.navigate(['login'])
        }
        else
          alert("SignUp Faild !");
        
        return res;
      })
}
  ngOnInit() {
  }

}
