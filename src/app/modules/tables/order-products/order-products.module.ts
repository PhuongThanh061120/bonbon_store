import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderProductsComponent } from './order-products.component';
import { OrderProductsRoutes } from './order-products.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ApiService } from '../../../_shared/components/services/api.service';

@NgModule({
  imports: [
    CommonModule,
    OrderProductsRoutes,
    SharedModule
  ],
  declarations: [OrderProductsComponent],
  providers: [ApiService]
})
export class OrderProductsModule { }
