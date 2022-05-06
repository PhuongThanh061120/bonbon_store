import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages.component';
import { LanguagesRoutes } from './languages.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { LanguageFormComponent } from './pages/language-form/language-form.component';
import { LanguageCreateComponent } from './pages/language-create/language-create.component';
import { LanguageUpdateComponent } from './pages/language-update/language-update.component';
import { LanguageService } from 'src/app/_shared/components/services/language.service';

@NgModule({
  imports: [CommonModule, LanguagesRoutes, SharedModule],
  declarations: [
    LanguagesComponent,
    LanguageFormComponent,
    LanguageCreateComponent,
    LanguageUpdateComponent,
  ],
  providers: [LanguageService]
})
export class LanguagesModule {}
