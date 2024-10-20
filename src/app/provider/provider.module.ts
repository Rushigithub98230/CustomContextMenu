import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderAppointmentsComponent } from './provider-appointments/provider-appointments.component';



@NgModule({
  declarations: [ProviderAppointmentsComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule
  ]
})
export class ProviderModule { }
