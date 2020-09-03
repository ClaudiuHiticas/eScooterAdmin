import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {RidesComponent} from './rides.component';
import {RideDetailComponent} from './ride-detail/ride-detail.component';

const routes: Routes = [
  {path: '', component: RidesComponent},
  {path: ':id', component: RideDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidesRoutingModule { }
