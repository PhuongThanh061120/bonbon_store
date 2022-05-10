import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductService } from '../../../_shared/components/services/product.service';
import { ApiService } from 'src/app/_shared/components/services/api.service';
import { UploadImageComponent } from './pages/upload-image/upload-image.component';
import { ProductDeleteComponent } from './pages/product-delete/product-delete.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutes,
    SharedModule
  ],
  declarations: [ProductsComponent, ProductFormComponent, ProductCreateComponent, ProductUpdateComponent, UploadImageComponent, ProductDeleteComponent],
  providers: [ApiService, ProductService]
})
export class ProductsModule { }
