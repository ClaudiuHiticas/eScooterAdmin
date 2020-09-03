import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from '../shared/components/landing-page/landing-page.component';
import {AuthGuard} from '../shared/guards/auth.guard';
import {LoginComponent} from './login.component';
import {UsersComponent} from '../users/users.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
