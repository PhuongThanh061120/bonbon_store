import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view.component';

const routes: Routes = [
  { path: '', component: ProductViewComponent },
];

export const ProductViewRoutes = RouterModule.forChild(routes);
