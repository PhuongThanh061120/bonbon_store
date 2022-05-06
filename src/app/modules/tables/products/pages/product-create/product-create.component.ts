import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from '../../../../../_shared/components/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  myForm!: FormGroup;
  id: any;
  constructor(
    private router: Router,
    protected route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      categoryId: [null, [Validators.required]],
      languageId: [null, [Validators.required]],
      publisherId: [null, [Validators.required]],
      publishingYear: [null],
      amount: [null, [Validators.required]],
      description: [''],
      price: [null, [Validators.required]],
    });
  }

  onSave() {
    this.productService.create(this.myForm.value).subscribe(() => {
      this.notification.success(
        'Thành công',
        'Thêm mới thành công'
      );
      this.gotoList();
    })
  }

  onCancel() {
    this.gotoList();
  }

  gotoList() {
    this.router.navigate([`/products-table`]);
  }

}
