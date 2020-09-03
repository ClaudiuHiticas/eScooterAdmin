import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {AuthGuard} from './shared/guards/auth.guard';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ScootersComponent } from './scooters/scooters.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { RidesComponent } from './rides/rides.component';
import { RideDetailComponent } from './rides/ride-detail/ride-detail.component';
import { ScooterDetailComponent } from './scooters/scooter-detail/scooter-detail.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    LandingPageComponent,
    NavbarComponent,
    ScootersComponent,
    UserDetailComponent,
    RidesComponent,
    RideDetailComponent,
    ScooterDetailComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
