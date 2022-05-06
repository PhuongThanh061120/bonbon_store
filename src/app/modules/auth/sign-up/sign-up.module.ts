import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { SignUpRoutes } from './sign-up.routing';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutes,
    SharedModule
  ],
  providers: [{
    provide: AuthService
  }
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
