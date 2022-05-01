import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_shared/components/models/api.model';
import { ApiService } from '../../../_shared/components/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private service: ApiService) { }

  items: Order[] = [];

  ngOnInit() {
    this.getAllOrder();
  }

  getAllOrder() {
    this.service.getAllOrder().subscribe((res: any) => {
      this.items = res;
    })
  }

}
