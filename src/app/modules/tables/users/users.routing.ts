import { Routes, RouterModule } from '@angular/router';
import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'change/:id', component: UsersComponent },
  { path: 'delete/:id', component: UsersComponent },
  { path: ':id', component: UserUpdateComponent },
];

export const UsersRoutes = RouterModule.forChild(routes);
