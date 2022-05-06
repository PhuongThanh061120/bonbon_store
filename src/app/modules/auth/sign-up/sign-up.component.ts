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
    firstName: '',
    lastName: '',
    phoneNumber: null,
    address: '',
    addressDesc: '',
    email: '',
    password: '',
  }
  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(20)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    addressDesc: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  })
  get firstName(){
    return this.signupForm.get("firstName");
  }
  get lastName(){
    return this.signupForm.get("lastName");
  }
  get email(){
    return this.signupForm.get("email");
  }
  get phoneNumber(){
    return this.signupForm.get("company");
  }
  get address(){
    return this.signupForm.get("address");
  }
  get addressDesc(){
    return this.signupForm.get("addressDesc");
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
        firstName: this.f.firstName.value,
        lastName: this.f.lastName.value,
        phoneNumber: this.f.phoneNumber.value,
        address: this.f.address.value,
        addressDesc: this.f.addressDesc.value,
        email: this.f.email.value,
        password: this.f.password.value,
      }).subscribe((res:any) =>{
        console.log(res)
        if (res['code'] == 200 ) {
          alert(res["message"]);
          this._route.navigate(['/login'])
        }
        else
          alert("SignUp Faild !");
          this._route.navigate(['/login'])

        return res;
      })
}
  ngOnInit() {
  }

}
