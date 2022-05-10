import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddToCardComponent } from 'src/app/_shared/components/add-to-card/add-to-card.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../_shared/components/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input() data: any;
  options = [
    {
      link: '/comic',
      title: 'Truyện tranh'
    },
    {
      link: '/english',
      title: 'Sách tiếng anh'
    },
    {
      link: '/novel',
      title: 'Tiểu thuyết'
    }
  ]

  id: any;

  items = {
    name: 'Doraemon tập 1: Chú khủng long của Nobita',
    price: 16000,
    desc: '"Chú khủng long của Nobita" là tác phẩm mở đầu cho xêri Doraemon truyện dài, và đã được chuyển thể thành phim hoạt hình. Trong tác phẩm này, 5 người nhóm bạn Doraemon đã ngược dòng thời gian, trở về thế giới khủng long Kỉ Bạch Á. Tất cả đã sát cánh bên nhau trải qua bao nhiêu sóng gió hiểm nguy để bảo vệ chú khủng long mới nở Pisuke.',
    activeIndex: 0,
    children: [
      {
        image: [
          '/assets/images/Doraemon/Do1.1.webp',
          '/assets/images/Doraemon/Do1.jpg',
          '/assets/images/Doraemon/Do1.2.webp',
        ],
        code: 'SF',
      },
      {
        image: [
          '/assets/images/Doraemon/Do1.2.webp'
        ],
        code: 'ST',
      },
      {
        image: [
          '/assets/images/Doraemon/Do1.3.jpg',
          '/assets/images/Doraemon/Do1.3.jpg',
        ],
        code: 'ST',
      }
    ]
  };
  // items: any;
  firstImage: any;
  restImage = [];
  constructor(private gallery: Gallery, private modal: NzModalService, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params.id;
    // goi api lay thong tin chi tiet theo id
    // this.productService.findOne(this.id).subscribe((res)=> {
    //   this.items = res;
    // })
    let images = [];
    this.items.children.forEach(x => images = images.concat(x.image.map(path => ({ path }))));
    this.firstImage = images.splice(1, 1)[0];
    this.restImage = images;
  }
  showGallery(index: number) {
    let images = [];

    this.items.children.forEach(x => images = images.concat(x.image.map(path => ({ path }))));
    let prop = {
      images,
      index
    };
    this.gallery.load(prop);
  }
  // data: any = this.items;
  createModal(data): void {
    console.log(data);

    this.modal.create({
      nzTitle: 'Thêm vào giỏ hàng',
      nzContent: AddToCardComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
      nzComponentParams: { data }
    });
  }

  // showModal(): void {
  //   this.createModal(this.data);
  // }
}
