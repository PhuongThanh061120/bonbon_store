import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CategoryService } from 'src/app/_shared/components/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  myForm!: FormGroup;
  id: any;
  constructor(protected router: Router, protected route: ActivatedRoute,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
    });
    this.categoryService.findOne(this.id).subscribe(val => {
      this.myForm.patchValue(val);
    })
  }

  onSave() {
    this.categoryService.update(this.id, this.myForm.value).subscribe(() => {
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
    this.router.navigate([`/categories`]);
  }
}
