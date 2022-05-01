import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.scss']
})
export class LanguageFormComponent {

  myForm: FormGroup;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      text: ['', [Validators.required]],
    });
  }

}
