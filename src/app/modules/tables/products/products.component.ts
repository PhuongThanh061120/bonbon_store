import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Product } from 'src/app/_shared/components/models/api.model';
import { ApiService } from '../../../_shared/components/services/api.service';
import { ProductService } from '../../../_shared/components/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(protected router: Router, private productService: ProductService, private notification: NzNotificationService) { }

  items: Product[] = [];
  ngOnInit() {
    this.getAll();

  }

  getAll(){
    this.productService.getAll().subscribe((res:any)=>{
      this.items = res
    })
  }

  clickCreate() {
    this.router.navigate([`/products-table/create`]);
  }

  clickUpdate(id: any) {
    this.router.navigate([`/products-table/${id}`]);
  }

  delete(id) {
    this.productService.delete(id).subscribe((res: any) => {

      this.notification.success(
        'Thành công',
        'Xóa thành công'
      );
      this.getAll();
    })
  }

}
