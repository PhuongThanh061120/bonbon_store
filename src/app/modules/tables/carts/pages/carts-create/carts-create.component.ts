import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts-create',
  templateUrl: './carts-create.component.html',
  styleUrls: ['./carts-create.component.scss']
})
export class CartsCreateComponent implements OnInit {

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
    this.router.navigate([`/carts`]);
  }

}
