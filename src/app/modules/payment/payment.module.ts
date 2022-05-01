import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { PaymentRoutes } from './payment.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutes,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
