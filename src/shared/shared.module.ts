import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { RegisterFormComponent } from './components/register-form/register-form.component';
// import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule.forRoot()],
  declarations: [FooterSectionComponent, NavbarComponent],
  exports: [FooterSectionComponent, NavbarComponent]
})
export class SharedModule {}
