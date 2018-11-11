import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { SharedModule } from 'src/shared/shared.module';

import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { GalleryFormComponent } from './components/gallery-form/gallery-form.component';
import { HotdealsFormComponent } from './components/hotdeals-form/hotdeals-form.component';
import { PackageCategoryFormComponent } from './components/package-category-form/package-category-form.component';
import { PackagesFormComponent } from './components/packages-form/packages-form.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { GalleryAddComponent } from './containers/gallery-add/gallery-add.component';
import { GalleryImageComponent } from './containers/gallery-image/gallery-image.component';
import { GalleryListComponent } from './containers/gallery-list/gallery-list.component';
import { HotdealsAddComponent } from './containers/hotdeals-add/hotdeals-add.component';
import { HotdealsImageComponent } from './containers/hotdeals-image/hotdeals-image.component';
import { HotdealsListComponent } from './containers/hotdeals-list/hotdeals-list.component';
import { IndexComponent } from './containers/index/index.component';
import { PackagesAddComponent } from './containers/packages-add/packages-add.component';
import { PackagesImageComponent } from './containers/packages-image/packages-image.component';
import { PackagesListComponent } from './containers/packages-list/packages-list.component';
import { DashboardComponent } from './dashboard.component';

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
      { path: 'packages-image/:id', component: PackagesImageComponent },
      { path: 'packages-add', component: PackagesAddComponent },
      { path: 'packages-add/:id', component: PackagesAddComponent },
      { path: 'hotdeals-list', component: HotdealsListComponent },
      { path: 'hotdeals-image/:id', component: HotdealsImageComponent },
      { path: 'hotdeals-add', component: HotdealsAddComponent },
      { path: 'hotdeals-add/:id', component: HotdealsAddComponent },
      { path: 'gallery-list', component: GalleryListComponent },
      { path: 'gallery-image/:id', component: GalleryImageComponent },
      { path: 'gallery-add', component: GalleryAddComponent },
      { path: 'gallery-add/:id', component: GalleryAddComponent }
    ]
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Ng2ImgMaxModule,
    RouterModule.forChild(ROUTES)
  ],
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
    PackageCategoryFormComponent,
    HotdealsFormComponent,
    GalleryFormComponent,
    HotdealsImageComponent,
    PackagesImageComponent,
    GalleryImageComponent
  ]
})
export class DashboardModule {}
