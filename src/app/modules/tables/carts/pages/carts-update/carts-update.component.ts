import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts-update',
  templateUrl: './carts-update.component.html',
  styleUrls: ['./carts-update.component.scss']
})
export class CartsUpdateComponent implements OnInit {

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
