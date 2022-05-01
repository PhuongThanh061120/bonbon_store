import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RingComponent } from './ring.component';
import { RingRoutes } from './ring.routing';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RingRoutes,
    SharedModule
  ],
  declarations: [RingComponent]
})
export class RingModule { }
