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
  // @Output() newItemEvent = new EventEmitter<string>();
  isVisible = false;
  isDisplay = false;
  index: number;
  constructor(
    private modal: NzModalService
  ) { }

  getActiveData(item: any) {
    return item.products[item.activeIndex || 0];
  }

  createModal(data): void {
    this.modal.create({
      nzTitle: 'Thêm vào giỏ hàng',
      nzContent: AddToCardComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
      nzComponentParams: { data }
    });
  }
}
