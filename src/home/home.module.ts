import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IndexComponent } from './containers/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  declarations: [HomeComponent, IndexComponent, CarouselComponent]
})
export class HomeModule {}
