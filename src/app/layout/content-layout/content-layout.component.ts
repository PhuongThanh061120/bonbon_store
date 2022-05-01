import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {
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
