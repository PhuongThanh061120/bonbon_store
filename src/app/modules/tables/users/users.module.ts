import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { ApiService } from '../../../_shared/components/services/api.service';
import { UserService } from '../../../_shared/components/services/user.service';

@NgModule({
  imports: [CommonModule, UsersRoutes, SharedModule],
  declarations: [UsersComponent, UserFormComponent, UserUpdateComponent],
  providers: [ApiService, UserService]
})
export class UsersModule {}
