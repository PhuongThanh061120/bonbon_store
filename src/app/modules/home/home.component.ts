import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../_shared/components/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contents = [
    {
      image: 'url(/assets/images/img1.jpg)'
    },
    {
      image: 'url(/assets/images/demo.jpg)'
    },
    {
      image: 'url(/assets/images/img5.jpg)'
    },
  ];

  products: any[] = [
    {
      img: '/assets/images/Doraemon/Do1.jpg',
      name: 'Doraemon tập 1: Chú khủng long của Nobita',
      price: 16000,
      publishingYear: 2022,
      amount: 11
    },
    {
      img: '/assets/images/Conan/Co1.jpg',
      name: 'Thám tử lừng danh Conan tập 1',
      price: 20000,
      publishingYear: 2020,
      amount: 10
    },
    {
      img: '/assets/images/OnePiece/One1.jpg',
      name: 'OnePiece tập 1: Bình minh của cuộc phiêu lưu',
      price: 100000,
      publishingYear: 2022,
      amount: 11
    },
    {
      img: '/assets/images/Shin/Shin1.jpg',
      name: 'Shin - cậu bé bút chì Tập 1',
      price: 20000,
      publishingYear: 2022,
      amount: 20
    },
    {
      img: '/assets/images/DiepLacVoTam/Neu1.1.jpg',
      name: 'Nếu không là tình yêu',
      price: 30000,
      publishingYear: 2020,
      amount: 11
    },
  ]
  // private Url = 'https://localhost:5001/api/ProductModels';
  private Url = 'http://localhost:8080/products/';
  listOfNewData = [];
  listOfFavoriteData = [];
  listOfPersonal = [];
  constructor(
    private productsService: ProductsService
  ) { }

  localS = localStorage.getItem('user')

  ngOnInit() {
    console.log('/////////'+this.localS);



    // tạm fake data để hiển thị, call api bằng func getData();
    // this.listOfNewData = this.products.filter(x => x.publishingYear === new Date().getFullYear());
    // this.listOfFavoriteData = this.products.filter(x => x.amount > 10);
    // this.listOfPersonal = this.products;
    // this.listOfPersonal.length = 5;
    this.getData();

  }
  getData() {
    // lấy ra danh sách cho 3 loại đầu mục sách hiển thị trên trang chủ
    // sách mới lấy theo năm xuất bản là năm hiện tại
    // sách được yêu thích lấy theo số lượng tồn kho > 10
    // sách gợi ý lấy mặc định 5 sách đầu tiên trả về theo danh sách
    this.productsService.getAll().subscribe(res => {
      this.listOfNewData = res.filter(x => x.publishingYear === new Date().getFullYear());
      this.listOfFavoriteData = res.filter(x => x.amount > 10);
      this.listOfPersonal = res;
      this.listOfPersonal.length = 5;
  })
  }



}
