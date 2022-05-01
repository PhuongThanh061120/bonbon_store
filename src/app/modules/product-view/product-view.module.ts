import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ProductViewRoutes } from './product-view.routing';
import { IvyGalleryModule } from 'angular-gallery';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ProductViewRoutes,
    SharedModule,
    IvyGalleryModule,
    HttpClientModule
  ],
  declarations: [ProductViewComponent]
})
export class ProductViewModule { }
