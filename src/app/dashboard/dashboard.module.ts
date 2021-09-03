import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PoolComponent } from './pool/pool.component';
import { SelectedComponent } from './selected/selected.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    PoolComponent,
    SelectedComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
