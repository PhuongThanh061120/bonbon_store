import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSiteComponent } from './products-site.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ProductsSiteRoutes } from './products-site.routing';
import { ApiService } from '../../_shared/components/services/api.service';
import { ProductsService } from '../../_shared/components/services/products.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsSiteRoutes,
    SharedModule
  ],
  declarations: [ProductsSiteComponent],
  providers: [ApiService, ProductsService]
})
export class ProductsSiteModule { }
