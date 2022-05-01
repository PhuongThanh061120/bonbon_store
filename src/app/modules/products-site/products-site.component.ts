import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_shared/components/models/api.model';
import { ProductModelDto, ProductModelsClient } from 'src/app/_shared/components/services/identity-api';
import { ApiService } from '../../_shared/components/services/api.service';

@Component({
  selector: 'app-products-site',
  templateUrl: './products-site.component.html',
  styleUrls: ['./products-site.component.scss']
})
export class ProductsSiteComponent implements OnInit {
  listOfData: ProductModelDto[] = [];
  products: Product[] = [];
  constructor(
    private productModelsClient: ProductModelsClient,
    private service: ApiService
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.productModelsClient.getAll().subscribe(res => {
      this.listOfData = res.data;
    });
  }

  getListProduct(){
    this.service.getAllProduct().subscribe((res: any) => {
      this.products = res;
    })
  }
}
