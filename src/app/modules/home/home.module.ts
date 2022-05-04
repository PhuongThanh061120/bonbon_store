import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { HomeRoutes } from './home.routing';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../_shared/components/services/products.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule,
    HttpClientModule
  ],
  declarations: [HomeComponent],
  providers: [ProductsService]
})
export class HomeModule { }
