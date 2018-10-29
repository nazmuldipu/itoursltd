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
  },
  {
    path: 'contact',
    loadChildren: '../contact/contact.module#ContactModule'
  },
  {
    path: 'about',
    loadChildren: '../about/about.module#AboutModule'
  },
  { path: 'login', component: LoginComponent }
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
