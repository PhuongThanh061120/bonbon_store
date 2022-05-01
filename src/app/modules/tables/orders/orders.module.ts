import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutes } from './orders.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ApiService } from '../../../_shared/components/services/api.service';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutes,
    SharedModule
  ],
  declarations: [OrdersComponent],
  providers: [ApiService]
})
export class OrdersModule { }
