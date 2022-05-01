import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  isHide = true;
  user: any;
  products = [
    {
      link: '/products',
      title: 'Truyện tranh'
    },
    {
      link: '/products',
      title: 'Sách tiếng anh'
    },
    {
      link: '/products',
      title: 'Tiểu thuyết'
    }
  ]
  constructor() { }

}
