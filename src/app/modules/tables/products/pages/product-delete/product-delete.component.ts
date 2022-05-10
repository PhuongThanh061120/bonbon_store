import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from '../../../../../_shared/components/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  id: any;
  productFindOne: any = {};

  constructor(
    private modalRef: NzModalRef,
    protected route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);

    this.productService.findOne(this.id).subscribe((res) => {
      this.productFindOne = res;
      // console.log('res', res);
    });
    // console.log('product', this.productFindOne);
  }

  handleCancel(): void {
    this.modalRef.destroy();
  }

  handleSave(): void {
    this.productService.findOne(this.id).subscribe((res) => {
      this.productFindOne = res;
      if (this.productFindOne.active === 'true') {
        this.productService.change(this.id, null).subscribe(() => {});
      }
    });
    this.productService.delete(this.id).subscribe(
      (res) => {
        console.log(res);
        this.notification.success('Thành công', 'Xóa thành công');
      },
      (err) => {
        console.log(err, 'abc');
      }
    );
    this.modalRef.destroy();
    this.router.navigate([`/products-table`]);
  }
}
