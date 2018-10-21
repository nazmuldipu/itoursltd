import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destinations.component';
import { CoxBazarComponent } from './containers/cox-bazar/cox-bazar.component';
import { SidenavComponent } from './containers/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BandarbanComponent } from './containers/bandarban/bandarban.component';
import { DhakaComponent } from './containers/dhaka/dhaka.component';
import { KhagrachariComponent } from './containers/khagrachari/khagrachari.component';
import { KuakataComponent } from './containers/kuakata/kuakata.component';
import { RangamatiComponent } from './containers/rangamati/rangamati.component';
import { SaintMartinComponent } from './containers/saint-martin/saint-martin.component';
import { CherrapunjeeComponent } from './containers/cherrapunjee/cherrapunjee.component';
import { DarjeelingComponent } from './containers/darjeeling/darjeeling.component';
import { DelhiComponent } from './containers/delhi/delhi.component';
import { GuwahatiComponent } from './containers/guwahati/guwahati.component';
import { JaipurComponent } from './containers/jaipur/jaipur.component';
import { JaisalmerComponent } from './containers/jaisalmer/jaisalmer.component';
import { KalimpongComponent } from './containers/kalimpong/kalimpong.component';
import { KashmirComponent } from './containers/kashmir/kashmir.component';
import { KolkataComponent } from './containers/kolkata/kolkata.component';
import { ManaliComponent } from './containers/manali/manali.component';
import { MirikComponent } from './containers/mirik/mirik.component';
import { ShillongComponent } from './containers/shillong/shillong.component';
import { SimlaComponent } from './containers/simla/simla.component';
import { NepalComponent } from './containers/nepal/nepal.component';
import { BhutanComponent } from './containers/bhutan/bhutan.component';
import { ThailandComponent } from './containers/thailand/thailand.component';
import { MalaysiaComponent } from './containers/malaysia/malaysia.component';
import { MaldivesComponent } from './containers/maldives/maldives.component';
import { SrilankaComponent } from './containers/srilanka/srilanka.component';
import { ChinaComponent } from './containers/china/china.component';
import { IndonesiaComponent } from './containers/indonesia/indonesia.component';

// import { NavbarComponent } from './components/navbar/navbar.component';
export const ROUTES: Routes = [
  {
    path: '',
    component: DestinationsComponent,
    children: [
      {
        path: 'bangladesh/bandarban',
        component: BandarbanComponent
      },
      {
        path: 'bangladesh/coxs-bazar',
        component: CoxBazarComponent
      },
      {
        path: 'bangladesh/dhaka',
        component: DhakaComponent
      },
      {
        path: 'bangladesh/khagrachari',
        component: KhagrachariComponent
      },
      {
        path: 'bangladesh/kuakata',
        component: KuakataComponent
      },
      {
        path: 'bangladesh/rangamati',
        component: RangamatiComponent
      },
      {
        path: 'bangladesh/saint-martin',
        component: SaintMartinComponent
      },
      {
        path: 'india/cherrapunjee',
        component: CherrapunjeeComponent
      },
      {
        path: 'india/darjeeling',
        component: DarjeelingComponent
      },
      {
        path: 'india/delhi',
        component: DelhiComponent
      },
      {
        path: 'india/guwahati',
        component: GuwahatiComponent
      },
      {
        path: 'india/jaipur',
        component: JaipurComponent
      },
      {
        path: 'india/jaisalmer',
        component: JaisalmerComponent
      },
      {
        path: 'india/kalimpong',
        component: KalimpongComponent
      },
      {
        path: 'india/kashmir',
        component: KashmirComponent
      },
      {
        path: 'india/kolkata',
        component: KolkataComponent
      },
      {
        path: 'india/manali',
        component: ManaliComponent
      },
      {
        path: 'india/mirik',
        component: MirikComponent
      },
      {
        path: 'india/shillong',
        component: ShillongComponent
      },
      {
        path: 'india/simla',
        component: SimlaComponent
      },
      {
        path: 'nepal',
        component: NepalComponent
      },
      {
        path: 'bhutan',
        component: BhutanComponent
      },
      {
        path: 'thailand',
        component: ThailandComponent
      },
      {
        path: 'malaysia',
        component: MalaysiaComponent
      },
      {
        path: 'maldives',
        component: MaldivesComponent
      },
      {
        path: 'srilanka',
        component: SrilankaComponent
      },
      {
        path: 'china',
        component: ChinaComponent
      },
      {
        path: 'indonesia',
        component: IndonesiaComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DestinationsComponent,
    CoxBazarComponent,
    SidenavComponent,
    BandarbanComponent,
    DhakaComponent,
    KhagrachariComponent,
    KuakataComponent,
    RangamatiComponent,
    SaintMartinComponent,
    CherrapunjeeComponent,
    DarjeelingComponent,
    DelhiComponent,
    GuwahatiComponent,
    JaipurComponent,
    JaisalmerComponent,
    KalimpongComponent,
    KashmirComponent,
    KolkataComponent,
    ManaliComponent,
    MirikComponent,
    ShillongComponent,
    SimlaComponent,
    NepalComponent,
    BhutanComponent,
    ThailandComponent,
    MalaysiaComponent,
    MaldivesComponent,
    SrilankaComponent,
    ChinaComponent,
    IndonesiaComponent
  ]
})
export class DestinationsModule {}
