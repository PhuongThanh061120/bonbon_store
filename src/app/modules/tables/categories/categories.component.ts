import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/_shared/components/models/api.model';
import { CategoryService } from '../../../_shared/components/services/category.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor( protected router: Router, private categoryService: CategoryService, private notification: NzNotificationService) { }

  items: Category[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe((res:any) =>{
      this.items = res
    })
  }

  clickCreate() {
    this.router.navigate([`/categories/create`]);
  }

  clickUpdate(id: any) {
    this.router.navigate([`/categories/${id}`]);
  }

  clickDelete(id) {
    this.categoryService.delete(id).subscribe(() => {
      this.notification.success(
        'Thành công',
        'Xóa thành công'
      );
    })
  }

}
