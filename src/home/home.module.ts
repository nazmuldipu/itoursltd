import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './components/carousel/carousel.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HotDealsComponent } from './components/hot-deals/hot-deals.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { PackagesComponent } from './components/packages/packages.component';
import { IndexComponent } from './containers/index/index.component';
import { WhyUsComponent } from './containers/why-us/why-us.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

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
      { path: 'why-us', component: WhyUsComponent }
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
    WhyUsComponent
  ]
})
export class HomeModule {}