import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './containers/index/index.component';
import { SharedModule } from 'src/shared/shared.module';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { PackagesListComponent } from './containers/packages-list/packages-list.component';
import { PackagesAddComponent } from './containers/packages-add/packages-add.component';
import { HotdealsListComponent } from './containers/hotdeals-list/hotdeals-list.component';
import { HotdealsAddComponent } from './containers/hotdeals-add/hotdeals-add.component';
import { GalleryListComponent } from './containers/gallery-list/gallery-list.component';
import { GalleryAddComponent } from './containers/gallery-add/gallery-add.component';
import { PackagesFormComponent } from './components/packages-form/packages-form.component';
import { PackageCategoryFormComponent } from './components/package-category-form/package-category-form.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      { path: 'packages-list', component: PackagesListComponent },
      { path: 'packages-add', component: PackagesAddComponent },
      { path: 'packages-add/:id', component: PackagesAddComponent },
      { path: 'hotdeals-list', component: HotdealsListComponent },
      { path: 'hotdeals-add', component: HotdealsAddComponent },
      { path: 'gallery-list', component: GalleryListComponent },
      { path: 'gallery-add', component: GalleryAddComponent }
    ]
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [
    DashboardComponent,
    IndexComponent,
    SideNavbarComponent,
    DashNavbarComponent,
    PackagesListComponent,
    PackagesAddComponent,
    HotdealsListComponent,
    HotdealsAddComponent,
    GalleryListComponent,
    GalleryAddComponent,
    PackagesFormComponent,
    PackageCategoryFormComponent
  ]
})
export class DashboardModule {}
