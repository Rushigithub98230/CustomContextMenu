import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAppointmentsComponent } from './provider-appointments/provider-appointments.component';



const routes: Routes = [
  { path: 'doctor-appointment', component: ProviderAppointmentsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
