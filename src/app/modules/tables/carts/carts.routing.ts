import { Routes, RouterModule } from '@angular/router';
import { CartsComponent } from './carts.component';
import { CartsCreateComponent } from './pages/carts-create/carts-create.component';
import { CartsUpdateComponent } from './pages/carts-update/carts-update.component';

const routes: Routes = [
  {path: '', component: CartsComponent  },
  { path: 'create', component: CartsCreateComponent },
  { path: ':id', component: CartsUpdateComponent },
];

export const CartsRoutes = RouterModule.forChild(routes);
