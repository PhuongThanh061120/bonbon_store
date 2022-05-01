import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutes } from './categories.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CategoryCreateComponent } from './pages/category-create/category-create.component';
import { CategoryFormComponent } from './pages/category-form/category-form.component';
import { CategoryUpdateComponent } from './pages/category-update/category-update.component';
import { ApiService } from 'src/app/_shared/components/services/api.service';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutes,
    SharedModule
  ],
  declarations: [CategoriesComponent, CategoryCreateComponent, CategoryFormComponent, CategoryUpdateComponent],
  providers: [ApiService]
})
export class CategoriesModule { }
