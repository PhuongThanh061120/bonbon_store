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
  listOfData = [];
  totalPrice: number = 0;
  constructor(
    private nzMessageService: NzMessageService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.listOfData = this.cartService.getProduct();
    this.listOfData.forEach(x => this.totalPrice += x.price * x.number)
  }
  deleteProduct(data) {
    this.cartService.deleteProduct(data);
    this.listOfData = this.cartService.getProduct();
  }
}
