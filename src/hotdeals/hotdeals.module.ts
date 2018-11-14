import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotdealsComponent } from './hotdeals.component';
import { SharedModule } from 'src/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './containers/index/index.component';
import { HotdealsSideNavComponent } from './components/hotdeals-side-nav/hotdeals-side-nav.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HotdealsComponent,
    children: [
      {
        path: ':id',
        component: IndexComponent
      },
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [HotdealsComponent, IndexComponent, HotdealsSideNavComponent]
})
export class HotdealsModule {}
