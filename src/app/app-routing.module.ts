import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './shared/components/landing-page/landing-page.component';
import {ScootersComponent} from './scooters/scooters.component';
import {RidesComponent} from './rides/rides.component';
import {MapComponent} from './map/map.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent, canActivate: [AuthGuard]},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'users',  canActivate: [AuthGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'scooters', canActivate: [AuthGuard], loadChildren: () => import('./scooters/scooters.module').then(m => m.ScootersModule)},
  {path: 'rides', canActivate: [AuthGuard], loadChildren: () => import('./rides/rides.module').then(m => m.RidesModule)},
  {path: 'map', component: MapComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
