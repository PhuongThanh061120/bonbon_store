import { Component, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddToCardComponent } from '../add-to-card/add-to-card.component';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() data: any;

  products: any[] = [
    {
      img: '/assets/images/Doraemon/Do1.jpg',
      name: 'Doraemon tập 1: Chú khủng long của Nobita',
      price: '16,000đ',
    },
    {
      img: '/assets/images/Conan/Co1.jpg',
      name: 'Thám tử lừng danh Conan tập 1',
      price: '16,000đ',
    },
    {
      img: '/assets/images/OnePiece/One1.jpg',
      name: 'OnePiece tập 1: Bình minh của cuộc phiêu lưu',
      price: '16,000đ',
    },
    {
      img: '/assets/images/Shin/Shin1.jpg',
      name: 'Shin - cậu bé bút chì Tập 1',
      price: '16,000đ',
    },
    {
      img: '/assets/images/DiepLacVoTam/Neu1.1.jpg',
      name: 'Nếu không là tình yêu',
      price: '160,000đ',
    },
  ];
  // @Output() newItemEvent = new EventEmitter<string>();
  isVisible = false;
  isDisplay = false;
  index: number;
  constructor(private modal: NzModalService) {}

  getActiveData(item: any) {
    // debugger
    return item.products[item.activeIndex || 0];
    console.log(item.products);
  }
  createModal(): void {
    this.modal.create({
      nzTitle: 'Thêm vào giỏ hàng',
      nzContent: AddToCardComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
    });
  }

  showModal(): void {
    this.createModal();
  }
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  // products: Product[] = [];

  // ngOnInit(){
  //   this.getAllProduct();
  //   console.log(this.products);

  // }

  // getAllProduct() {
  //   this.service.getAllProduct().subscribe((res: any) => {
  //     this.products = res;
  //   })
  // }
}
