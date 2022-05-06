import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from 'src/app/_shared/components/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

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
    this.productService.findOne(this.id).subscribe(val => {
      const data = {
        ...val,
        categoryId: val.category.id,
        languageId: val.language.id,
        publisherId: val.publisher.id,
        description: val.desc
      }
      this.myForm.patchValue(data);
    })
  }

  onSave() {
    this.productService.update(this.id, this.myForm.value).subscribe(() => {
      this.notification.success(
        'Thành công',
        'Cập nhật thành công'
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
