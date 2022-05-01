import { Routes, RouterModule } from '@angular/router';
import { RingComponent } from './ring.component';

const routes: Routes = [
  { path: '', component: RingComponent },
];

export const RingRoutes = RouterModule.forChild(routes);
