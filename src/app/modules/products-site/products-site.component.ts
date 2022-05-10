import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_shared/components/models/api.model';
import { ProductModelDto, ProductModelsClient } from 'src/app/_shared/components/services/identity-api';
import { ProductsService } from 'src/app/_shared/components/services/products.service';
import { ApiService } from '../../_shared/components/services/api.service';

@Component({
  selector: 'app-products-site',
  templateUrl: './products-site.component.html',
  styleUrls: ['./products-site.component.scss']
})
export class ProductsSiteComponent implements OnInit {
  listOfData: any[] = [
    // {
    //   img: '/assets/images/Doraemon/Do1.jpg',
    //   name: 'Doraemon tập 1: Chú khủng long của Nobita',
    //   price: 16000,
    //   publishingYear: 2022,
    //   amount: 11
    // },
    // {
    //   img: '/assets/images/Conan/Co1.jpg',
    //   name: 'Thám tử lừng danh Conan tập 1',
    //   price: 20000,
    //   publishingYear: 2020,
    //   amount: 10
    // },
    // {
    //   img: '/assets/images/OnePiece/One1.jpg',
    //   name: 'OnePiece tập 1: Bình minh của cuộc phiêu lưu',
    //   price: 100000,
    //   publishingYear: 2022,
    //   amount: 11
    // },
    // {
    //   img: '/assets/images/Shin/Shin1.jpg',
    //   name: 'Shin - cậu bé bút chì Tập 1',
    //   price: 20000,
    //   publishingYear: 2022,
    //   amount: 20
    // },
    // {
    //   img: '/assets/images/DiepLacVoTam/Neu1.1.jpg',
    //   name: 'Nếu không là tình yêu',
    //   price: 30000,
    //   publishingYear: 2020,
    //   amount: 11
    // },
  ];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getData();
  }

  onSearch(val) {
    console.log(val);
  }

  getData() {
    this.productsService.getAll().subscribe(res => {
      this.listOfData = res;
    });
  }
}
