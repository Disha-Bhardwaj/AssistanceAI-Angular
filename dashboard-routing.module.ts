import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { DashboardLandingPageComponent } from './dashboard-landing-page/dashboard-landing-page.component';
import { CallHistoryPageComponent } from './call-history-page/call-history-page.component';

// import { UserPage } from './user.page';

const routes: Routes = [
  
  {
    path: '',
    component: DashboardLandingPageComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard-page',
        pathMatch: 'full'
      },
      {
        path: 'agent-page',
        component: DashboardPageComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'dashboard-page',
        component: AgentPageComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'call-history-page',
        component: CallHistoryPageComponent,
        // canActivate: [AuthGuard]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
