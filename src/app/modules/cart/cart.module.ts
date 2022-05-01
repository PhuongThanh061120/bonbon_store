import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutes } from './cart.routing';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutes,
    SharedModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
