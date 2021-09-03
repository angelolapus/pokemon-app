import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PoolComponent } from './pool/pool.component';
import { SelectedComponent } from './selected/selected.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    DashboardComponent,
    PoolComponent,
    SelectedComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatListModule
  ]
})
export class DashboardModule { }
