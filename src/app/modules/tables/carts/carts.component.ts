import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../_shared/components/services/api.service';
import { Cart } from '../../../_shared/components/models/api.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  constructor( protected router: Router, private service: ApiService) { }

  items: Cart[] = [];

  ngOnInit() {
    this.getAllCart();
  }

  getAllCart() {
    this.service.getAllCart().subscribe((res: any) => {
      this.items = res;
    })
  }

  // items: any[] = [
  //   {
  //     id: 1,
  //     userId: 1,
  //     productId: 1,
  //     amount: 16,
  //   },
  //   {
  //     id: 1,
  //     userId: 1,
  //     productId: 1,
  //     amount: 16,
  //   },
  //   {
  //     id: 1,
  //     userId: 1,
  //     productId: 1,
  //     amount: 16,
  //   },
  //   {
  //     id: 1,
  //     userId: 1,
  //     productId: 1,
  //     amount: 16,
  //   },
  //   {
  //     id: 1,
  //     userId: 1,
  //     productId: 1,
  //     amount: 16,
  //   },

  // ]

  clickCreate() {
    this.router.navigate([`/carts/create`]);
  }

  clickUpdate(item: any) {
    console.log(item.id);

    this.router.navigate([`/carts/${item.id}`]);
  }

}
