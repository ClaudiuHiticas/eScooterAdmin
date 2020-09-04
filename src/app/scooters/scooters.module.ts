import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScootersRoutingModule} from './scooters-routing.module';
import { ScooterNewComponent } from './scooter-new/scooter-new.component';
import {AppModule} from '../app.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScootersRoutingModule
  ]
})
export class ScootersModule { }
