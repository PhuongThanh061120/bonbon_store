import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carts-form',
  templateUrl: './carts-form.component.html',
  styleUrls: ['./carts-form.component.scss']
})
export class CartsFormComponent {

  myForm: FormGroup;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      productId: [null, [Validators.required]],
      amount: [null, [Validators.required]],
    });
  }

}
