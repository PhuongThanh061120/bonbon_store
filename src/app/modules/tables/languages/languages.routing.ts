import { Routes, RouterModule } from '@angular/router';
import { LanguagesComponent } from './languages.component';
import { LanguageCreateComponent } from './pages/language-create/language-create.component';
import { LanguageUpdateComponent } from './pages/language-update/language-update.component';

const routes: Routes = [
  { path: '', component: LanguagesComponent },
  { path: 'create', component: LanguageCreateComponent },
  { path: ':id', component: LanguageUpdateComponent },
];

export const LanguagesRoutes = RouterModule.forChild(routes);
