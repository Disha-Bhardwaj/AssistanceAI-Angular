import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { DashboardLandingPageComponent } from './dashboard-landing-page/dashboard-landing-page.component';
import { CallHistoryPageComponent } from './call-history-page/call-history-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule,
    MatSidenavModule, 
    MatTabsModule
  ],
  declarations: [
    DashboardPageComponent,
    DashboardSidebarComponent,
    AgentPageComponent,
    DashboardLandingPageComponent,
    CallHistoryPageComponent
  ]
})
export class DashboardModule { }
