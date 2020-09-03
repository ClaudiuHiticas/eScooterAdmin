import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from '../users/users-routing.module';
import {RidesRoutingModule} from './rides-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RidesRoutingModule
  ]
})
export class RidesModule { }
