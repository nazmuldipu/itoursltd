import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CompanyOverviewComponent } from './containers/company-overview/company-overview.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutSidenavComponent } from './components/about-sidenav/about-sidenav.component';
// import { SharedModule } from 'src/shared/shared.module';
export const ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: 'company-overview',
        component: CompanyOverviewComponent
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    AboutComponent,
    CompanyOverviewComponent,
    AboutSidenavComponent
  ]
})
export class AboutModule {}
