import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CompanyOverviewComponent } from './containers/company-overview/company-overview.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutSidenavComponent } from './components/about-sidenav/about-sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { ExecutiveComponent } from './containers/executive/executive.component';
import { MissionandvisionComponent } from './containers/missionandvision/missionandvision.component';
import { StrategyComponent } from './containers/strategy/strategy.component';
import { ValuesComponent } from './containers/values/values.component';
// import { SharedModule } from 'src/shared/shared.module';
export const ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: 'company-overview',
        component: CompanyOverviewComponent
      },
      {
        path: 'executive',
        component: ExecutiveComponent
      },
      {
        path: 'missionandvision',
        component: MissionandvisionComponent
      },
      {
        path: 'strategy',
        component: StrategyComponent
      },
      {
        path: 'values',
        component: ValuesComponent
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [
    AboutComponent,
    CompanyOverviewComponent,
    AboutSidenavComponent,
    ExecutiveComponent,
    MissionandvisionComponent,
    StrategyComponent,
    ValuesComponent
  ]
})
export class AboutModule {}
