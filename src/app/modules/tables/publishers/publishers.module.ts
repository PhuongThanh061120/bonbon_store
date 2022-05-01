import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishersComponent } from './publishers.component';
import { PublishersRoutes } from './publishers.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { PublisherCreateComponent } from './pages/publisher-create/publisher-create.component';
import { PublisherFormComponent } from './pages/publisher-form/publisher-form.component';
import { PublisherUpdateComponent } from './pages/publisher-update/publisher-update.component';
import { ApiService } from '../../../_shared/components/services/api.service';

@NgModule({
  imports: [CommonModule, PublishersRoutes, SharedModule],
  declarations: [
    PublishersComponent,
    PublisherCreateComponent,
    PublisherFormComponent,
    PublisherUpdateComponent,
  ],
  providers: [ApiService]
})
export class PublishersModule {}
