import { Routes, RouterModule } from '@angular/router';
import { ProductsSiteComponent } from './products-site.component';

const routes: Routes = [
  { path: '', component: ProductsSiteComponent },
];

export const ProductsSiteRoutes = RouterModule.forChild(routes);
