import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-create',
  templateUrl: './language-create.component.html',
  styleUrls: ['./language-create.component.scss']
})
export class LanguageCreateComponent implements OnInit {

  @Input() myForm!: FormGroup
  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  onSave() {
    this.gotoList();
  }

  onCancel() {
    this.gotoList();
  }

  gotoList() {
    this.router.navigate([`/languages`]);
  }

}
