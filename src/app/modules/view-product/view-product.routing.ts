import { Routes, RouterModule } from '@angular/router';
import { ViewProductComponent } from './view-product.component';

const routes: Routes = [
  { path: '', component: ViewProductComponent },
];

export const ViewProductRoutes = RouterModule.forChild(routes);
