import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoryCreateComponent } from './pages/category-create/category-create.component';
import { CategoryUpdateComponent } from './pages/category-update/category-update.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'create', component: CategoryCreateComponent },
  { path: ':id', component: CategoryUpdateComponent },
];

export const CategoriesRoutes = RouterModule.forChild(routes);
