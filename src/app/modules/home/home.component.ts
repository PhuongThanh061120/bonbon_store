import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: 'Sản phẩm được quan tâm nhất',
      textLead: 'Các bạn trẻ không nên bỏ lỡ'
    },
    {
      title: 'Sản phẩm mới nhất',
      textLead: 'Bạn không nên bỏ lỡ'
    },
    {
      title: 'Gợi ý riêng cho bạn',
      textLead: 'Bạn không nên bỏ lỡ'
    }
  ];
  contents = [
    {
      image: 'url(/assets/images/img1.jpg)',
      // title: 'Ngập tràn ưu đãi',
      // pragragraph: 'Thả thính tình yêu',
      // align: 'left'
    },
    {
      image: 'url(/assets/images/demo.jpg)',
      // title: 'Ngập tràn ưu đãi',
      // pragragraph: 'Thả thính tình yêu',
      // align: 'center'
    },
    {
      image: 'url(/assets/images/img5.jpg)',
      // title: 'Ngập tràn ưu đãi',
      // pragragraph: 'Thả thính tình yêu',
      // align: 'right'
    },
  ];
  // topics = [
  //   {
  //     img: '/assets/images/img3.jpg',
  //     title: 'Một chiều thu',
  //     content: 'Mùa thu và nỗi nhớ'
  //   },
  //   {
  //     img: '/assets/images/img2.jpg',
  //     title: 'Một chiều thu',
  //     content: 'Mùa thu và nỗi nhớ'
  //   },
  //   {
  //     img: '/assets/images/img1.jpg',
  //     title: 'Một chiều thu',
  //     content: 'Mùa thu và nỗi nhớ'
  //   },
  // ];
  // private Url = 'https://localhost:5001/api/ProductModels';
  private Url = 'http://localhost:8080/products/';
  listOfData = [];
  productName = [];
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.http.get<any>(this.Url).subscribe(result => {
      if (this.Url) {
        this.listOfData = result.data;
        console.log(this.listOfData);
      }
    })
  }

}
