import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IndexComponent } from './containers/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HotDealsComponent } from './components/hot-deals/hot-deals.component';
import { PackagesComponent } from './components/packages/packages.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { FooterComponent } from './components/footer/footer.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule.forChild(ROUTES)],
  declarations: [HomeComponent, IndexComponent, CarouselComponent, HotDealsComponent, PackagesComponent, EventManagementComponent, GalleryComponent, OurPartnersComponent, FooterComponent]
})
export class HomeModule {}
