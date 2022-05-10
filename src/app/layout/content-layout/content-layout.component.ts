import { Component, OnInit } from '@angular/core';
import { Log } from 'oidc-client';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit{
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
  localS = localStorage.getItem('user')

  ngOnInit(){
    console.log(this.localS);

  }
  // localS = 'Bình';


}
