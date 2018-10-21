import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurAddressComponent } from './containers/our-address/our-address.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { FeedbackComponent } from './containers/feedback/feedback.component';
import { FaqComponent } from './containers/faq/faq.component';

export const ROUTES: Routes = [
  { path: 'our-address', component: OurAddressComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [OurAddressComponent, FeedbackComponent, FaqComponent]
})
export class ContactModule {}
