import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent{

  myForm: FormGroup;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      addressDetail: ['', [Validators.required]],
      description: [''],
      isMain: ['', [Validators.required]],
      userId: [null, [Validators.required]],
    });
  }

}
