import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product.component';
import { SharedModule } from '../../_shared/shared.module';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductService } from '../../_shared/components/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductRoutes } from './view-product.routing';

@NgModule({
  imports: [
    CommonModule,
    ViewProductRoutes,
    SharedModule,
    HttpClientModule
  ],
  declarations: [ViewProductComponent, ProductViewComponent],
  providers: [ProductService]
})
export class ViewProductModule { }
