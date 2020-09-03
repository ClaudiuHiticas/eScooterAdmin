import { Component, OnInit } from '@angular/core';
import {Ride} from '../shared/models/ride';
import {RideService} from '../shared/services/ride.service';
import {Scooter} from '../shared/models/scooter';
import {UsersService} from '../shared/services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {

  rides: Ride[];
  userEmail;

  constructor(
    private rideService: RideService,
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadData().then();
  }

  async loadData() {
    this.rides = await this.rideService.getRides();
    console.log(this.rides);
  }



  gotoDetail(id: string): void {
    this.router.navigate(['/rides/', id]).then();
  }
}
