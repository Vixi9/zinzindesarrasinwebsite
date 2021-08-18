import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list'; 

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule
  ],
  exports: [
    ClientsComponent
  ]
})
export class AdministrationModule { }
