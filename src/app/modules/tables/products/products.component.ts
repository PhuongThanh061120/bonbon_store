import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/_shared/components/models/api.model';
import { ApiService } from '../../../_shared/components/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(protected router: Router, private service: ApiService) { }

  items: Product[] = [];
  ngOnInit() {
    this.getAll();
    console.log(this.items);

  }

  getAll(){
    this.service.getAllProduct().subscribe((res:any)=>{
      this.items = res
    })
  }

  clickCreate() {
    this.router.navigate([`/products-table/create`]);
  }

  clickUpdate(item: any) {
    console.log(item.id);

    this.router.navigate([`/products-table/${item.id}`]);
  }

}
