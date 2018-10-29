import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/shared/services/auth-guard.service';

import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { GallerysService } from './services/gallerys.service';
import { HotdealsService } from './services/hotdeals.service';
import { PackagesService } from './services/packages.service';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule.forRoot()],
  declarations: [FooterSectionComponent, NavbarComponent],
  providers: [
    AngularFireAuthModule,
    AuthService,
    AuthGuard,
    PackagesService,
    HotdealsService,
    GallerysService
  ],
  exports: [
    FooterSectionComponent,
    NavbarComponent,
    NgbModule,
    AngularFireAuthModule
  ]
})
export class SharedModule {}
