import { Routes, RouterModule } from '@angular/router';
import { PublisherCreateComponent } from './pages/publisher-create/publisher-create.component';
import { PublisherUpdateComponent } from './pages/publisher-update/publisher-update.component';
import { PublishersComponent } from './publishers.component';

const routes: Routes = [
  { path: '', component: PublishersComponent },
  { path: 'create', component: PublisherCreateComponent },
  { path: ':id', component: PublisherUpdateComponent },
];

export const PublishersRoutes = RouterModule.forChild(routes);
