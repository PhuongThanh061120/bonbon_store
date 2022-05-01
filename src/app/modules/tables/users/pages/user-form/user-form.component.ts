import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  myForm: FormGroup;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userId: [null, [Validators.required]],
      email: [''],
      firstName: [''],
      lastName: [''],
      password: [''],
      phoneNumber: [''],
    });
  }

}
