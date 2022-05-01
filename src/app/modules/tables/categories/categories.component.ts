import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/_shared/components/models/api.model';
import { ApiService } from 'src/app/_shared/components/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor( protected router: Router, private service: ApiService) { }

  items: Category[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllCategory().subscribe((res:any) =>{
      this.items = res
    })
  }

  clickCreate() {
    this.router.navigate([`/categories/create`]);
  }

  clickUpdate(item: any) {
    console.log(item.id);

    this.router.navigate([`/categories/${item.id}`]);
  }

}
