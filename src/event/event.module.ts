import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ArtistComponent } from './containers/artist/artist.component';
import { BrandComponent } from './containers/brand/brand.component';
import { CeremoniesComponent } from './containers/ceremonies/ceremonies.component';
import { CorporateComponent } from './containers/corporate/corporate.component';
import { ExhibitionComponent } from './containers/exhibition/exhibition.component';
import { PhotographyComponent } from './containers/photography/photography.component';
import { SharedModule } from 'src/shared/shared.module';

export const ROUTES: Routes = [
  { path: 'corporate', component: CorporateComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'ceremonies', component: CeremoniesComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'exhibition', component: ExhibitionComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CorporateComponent,
    BrandComponent,
    CeremoniesComponent,
    ArtistComponent,
    ExhibitionComponent,
    PhotographyComponent
  ]
})
export class EventModule {}
