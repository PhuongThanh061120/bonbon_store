import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { LoginRoutes } from './login.routing';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    SharedModule
  ],
  providers: [{
    provide: AuthService
  }
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
