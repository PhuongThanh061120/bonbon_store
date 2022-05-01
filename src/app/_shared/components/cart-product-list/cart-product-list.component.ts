import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss']
})
export class CartProductListComponent implements OnInit {
  amount = new FormControl(1, [Validators.required])
  demoValue = 1;
  listOfData = [];
  constructor(
    private nzMessageService: NzMessageService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  confirm(item): void {
    // this.items = this.items.filter(x => x !== item);
    // this.nzMessageService.info('Xóa thành công');
  }
  getProduct() {
    this.listOfData = this.cartService.getProduct();
    console.log(this.listOfData);
  }
  deleteProduct(data) {
    this.cartService.deleteProduct(data);
    this.listOfData = this.cartService.getProduct();
  }
}
