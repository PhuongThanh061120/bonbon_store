import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from './models/address.model';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  items: any[] = [
    {
      id: 1,
      detail: 'Cầu Diễn, Bắc Từ Liêm, Hà Nội',
      description: 'Không có mô tả gì hết',
      isMain: true,
      userId: 1
    },
    {
      id: 2,
      detail: 'Cầu Diễn, Bắc Từ Liêm, Hà Nội',
      description: 'Không có mô tả gì hết',
      isMain: true,
      userId: 1
    },
    {
      id: 3,
      detail: 'Cầu Diễn, Bắc Từ Liêm, Hà Nội',
      description: 'Không có mô tả gì hết',
      isMain: true,
      userId: 1
    },
    {
      id: 4,
      detail: 'Cầu Diễn, Bắc Từ Liêm, Hà Nội',
      description: 'Không có mô tả gì hết',
      isMain: true,
      userId: 1
    },
  ]

  clickCreate() {
    this.router.navigate([`/addresses/create`]);
  }

  clickUpdate(item: any) {
    console.log(item.id);

    this.router.navigate([`/addresses/${item.id}`]);
  }

}
