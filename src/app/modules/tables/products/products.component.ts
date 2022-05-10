import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Product } from 'src/app/_shared/components/models/api.model';
import { ApiService } from '../../../_shared/components/services/api.service';
import { ProductService } from '../../../_shared/components/services/product.service';
import { ProductDeleteComponent } from './pages/product-delete/product-delete.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    protected router: Router,
    private modal: NzModalService,
    private productService: ProductService,
    private notification: NzNotificationService
  ) {}

  items: Product[] = [];
  productFindOne: any;
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe((res: any) => {
      this.items = res;
    });
  }

  clickCreate() {
    this.router.navigate([`/products-table/create`]);
  }

  clickChange(id: any) {
    this.productService.change(id, null).subscribe(() => {
      this.getAll();
    })
  }

  clickUpload(id: any) {
    this.router.navigate([`/products-table/upload/${id}`]);
  }

  clickUpdate(id: any) {
    this.router.navigate([`/products-table/${id}`]);
  }

  delete(id) {
    // this.router.navigate([`/products-table/delete/${id}`]);
    // this.modal.create({
    //   nzTitle: 'Xác nhận xóa',
    //   nzContent: ProductDeleteComponent,
    //   nzFooter: null,
    //   nzClassName: 'modal-md',
    //   nzWidth: '500',
    // });
    this.productService.findOne(id).subscribe((res) => {
      this.productFindOne = res;
      if (this.productFindOne.active === 'true') {
        this.productService.change(id, null).subscribe(() => {});
      }
    });
    this.productService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.notification.success('Thành công', 'Xóa thành công');
        this.getAll();
      },
      (err) => {
        console.log(err, 'abc');
      }
    );
  }
}
