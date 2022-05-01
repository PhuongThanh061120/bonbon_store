import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.scss']
})
export class OrderProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: any[] = [
    {
      id: 1,
      orderId: 1,
      productId: 1,
      amount: 10
    },
    {
      id: 1,
      orderId: 1,
      productId: 1,
      amount: 10
    },
    {
      id: 1,
      orderId: 1,
      productId: 1,
      amount: 10
    },
    {
      id: 1,
      orderId: 1,
      productId: 1,
      amount: 10
    },
  ]

  // constructor(private service: ApiService) { }

  // items: Order[] = [];

  // ngOnInit() {
  //   this.getAllOrder();
  //   console.log(this.items);

  // }

  // getAllOrder() {
  //   this.service.getAllOrder().subscribe((res: any) => {
  //     this.items = res;
  //   })
  // }

}
