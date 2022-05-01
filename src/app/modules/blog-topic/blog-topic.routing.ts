import { Routes, RouterModule } from '@angular/router';
import { BlogTopicComponent } from './blog-topic.component';

const routes: Routes = [
  { path: '', component: BlogTopicComponent },
];

export const BlogTopicRoutes = RouterModule.forChild(routes);
