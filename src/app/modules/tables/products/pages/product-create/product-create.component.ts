import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

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
    this.router.navigate([`/addresses`]);
  }

}
