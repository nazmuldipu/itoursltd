import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NavbarComponent } from 'src/home/components/navbar/navbar.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { LoginFormComponent } from 'src/shared/components/login-form/login-form.component';
import { RegisterFormComponent } from 'src/shared/components/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AuthGuard } from '../shared/services/auth-guard.service';

// routes
export const ROUTES: Routes = [
  {
    path: 'about',
    loadChildren: '../about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: '../contact/contact.module#ContactModule'
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'destinations',
    loadChildren: '../destinations/destinations.module#DestinationsModule'
  },
  {
    path: 'event',
    loadChildren: '../event/event.module#EventModule'
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    // NavbarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
