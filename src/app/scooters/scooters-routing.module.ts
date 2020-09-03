import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {ScootersComponent} from './scooters.component';
import {ScooterDetailComponent} from './scooter-detail/scooter-detail.component';

const routes: Routes = [
  {path: '', component: ScootersComponent},
  {path: ':id', component: ScooterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScootersRoutingModule { }
