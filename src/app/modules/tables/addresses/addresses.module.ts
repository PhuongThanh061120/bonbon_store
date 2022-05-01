import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses.component';
import { AddressesRoutes } from './addresses.routing';
import { SharedModule } from 'src/app/_shared/shared.module';
import { AddressFormComponent } from './pages/address-form/address-form.component';
import { AddressCreateComponent } from './pages/address-create/address-create.component';
import { AddressUpdateComponent } from './pages/address-update/address-update.component';

@NgModule({
  imports: [
    CommonModule,
    AddressesRoutes,
    SharedModule
  ],
  declarations: [AddressesComponent, AddressFormComponent, AddressCreateComponent, AddressUpdateComponent]
})
export class AddressesModule { }
