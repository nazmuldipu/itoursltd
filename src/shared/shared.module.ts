import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterSectionComponent],
  exports: [FooterSectionComponent]
})
export class SharedModule {}
