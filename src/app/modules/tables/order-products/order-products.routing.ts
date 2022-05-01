import { Routes, RouterModule } from '@angular/router';
import { OrderProductsComponent } from './order-products.component';

const routes: Routes = [
  { path: '', component: OrderProductsComponent },
];

export const OrderProductsRoutes = RouterModule.forChild(routes);
