import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from 'src/home/components/navbar/navbar.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: 'event',
    loadChildren: '../event/event.module#EventModule'
  },
  {
    path: 'destinations',
    loadChildren: '../destinations/destinations.module#DestinationsModule'
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), NgbModule.forRoot()],
  declarations: [AppComponent, NavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
