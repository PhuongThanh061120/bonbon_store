import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-demo-cart',
  templateUrl: './demo-cart.component.html',
  styleUrls: ['./demo-cart.component.scss']
})
export class DemoCartComponent implements OnInit {
  constructor(
    private modal: NzModalRef,
  ) { }

  ngOnInit() {
  }

  handleCancel() {
    this.modal.destroy()
  }
}
