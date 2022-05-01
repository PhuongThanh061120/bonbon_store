import { Routes, RouterModule } from '@angular/router';
import { AddressesComponent } from './addresses.component';
import { AddressCreateComponent } from './pages/address-create/address-create.component';
import { AddressUpdateComponent } from './pages/address-update/address-update.component';

const routes: Routes = [
  { path: '', component: AddressesComponent },
  { path: 'create', component: AddressCreateComponent },
  { path: ':id', component: AddressUpdateComponent },
];

export const AddressesRoutes = RouterModule.forChild(routes);
