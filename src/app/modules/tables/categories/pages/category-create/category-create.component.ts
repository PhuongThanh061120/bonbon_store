import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CategoryService } from '../../../../../_shared/components/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  myForm!: FormGroup;
  id: any;

  // @Output() save = new EventEmitter<void>();
  // @Output() cancel = new EventEmitter<void>();
  constructor(protected router: Router, protected route: ActivatedRoute,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: [''],
    });
  }

  onSave() {
    this.categoryService.create(this.myForm.value).subscribe(() => {
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
    this.router.navigate([`/categories`]);
  }

}
