import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { PaymentRoutes } from './payment.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from 'src/app/_shared/components/services/order.service';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutes,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [PaymentComponent],
  providers: [OrderService]
})
export class PaymentModule { }
