import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HotDealsComponent } from './components/hot-deals/hot-deals.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { PackagesComponent } from './components/packages/packages.component';
import { CustomPackageComponent } from './containers/custom-package/custom-package.component';
import { IndexComponent } from './containers/index/index.component';
import { WhyUsComponent } from './containers/why-us/why-us.component';
import { HomeComponent } from './home.component';
import { CustomPackageFormComponent } from './components/custom-package-form/custom-package-form.component';
import { ThankyouComponent } from './containers/thankyou/thankyou.component';
import { HotdealsDetailsComponent } from './containers/hotdeals-details/hotdeals-details.component';
import { GallerysComponent } from './containers/gallerys/gallerys.component';
import { PackageListComponent } from './containers/package-list/package-list.component';
import { PackageDetailsComponent } from './containers/package-details/package-details.component';
import { PackageListSideNavComponent } from './components/package-list-side-nav/package-list-side-nav.component';
import { PackageFeaturesComponent } from './components/package-features/package-features.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      { path: 'why-us', component: WhyUsComponent },
      { path: 'custom-package', component: CustomPackageComponent },
      { path: 'thankyou', component: ThankyouComponent },
      { path: 'package-list', component: PackageListComponent },
      { path: 'package-list/:city', component: PackageListComponent },
      { path: 'package-details/:id', component: PackageDetailsComponent },
      { path: 'hotdeals', component: HotdealsDetailsComponent },
      { path: 'hotdeals/:id', component: HotdealsDetailsComponent },
      { path: 'gallerys', component: GallerysComponent },
      { path: 'gallerys/:id', component: GallerysComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HomeComponent,
    IndexComponent,
    CarouselComponent,
    HotDealsComponent,
    PackagesComponent,
    EventManagementComponent,
    GalleryComponent,
    OurPartnersComponent,
    FooterComponent,
    // NavbarComponent,
    FloatingButtonComponent,
    WhyUsComponent,
    CustomPackageComponent,
    CustomPackageFormComponent,
    ThankyouComponent,
    HotdealsDetailsComponent,
    GallerysComponent,
    PackageListComponent,
    PackageDetailsComponent,
    PackageListSideNavComponent,
    PackageFeaturesComponent
  ]
})
export class HomeModule {}
