import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create', component: ProductCreateComponent },
  { path: ':id', component: ProductUpdateComponent },
];

export const ProductsRoutes = RouterModule.forChild(routes);
