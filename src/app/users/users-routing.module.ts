import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: ':id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
