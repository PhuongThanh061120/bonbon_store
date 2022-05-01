import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './carts.component';
import { CartsRoutes } from './carts.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CartsFormComponent } from './pages/carts-form/carts-form.component';
import { CartsCreateComponent } from './pages/carts-create/carts-create.component';
import { CartsUpdateComponent } from './pages/carts-update/carts-update.component';
import { ApiService } from '../../../_shared/components/services/api.service';

@NgModule({
  imports: [
    CommonModule,
    CartsRoutes,
    SharedModule
  ],
  declarations: [CartsComponent, CartsFormComponent, CartsCreateComponent, CartsUpdateComponent],
  providers: [ApiService]
})
export class CartsModule { }
