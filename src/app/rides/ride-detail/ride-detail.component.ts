import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {RideService} from '../../shared/services/ride.service';
import {Ride} from '../../shared/models/ride';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit, OnDestroy {

  ride: Ride;
  unsubscribe$ = new Subject();

  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private service: RideService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(paramMap => {
      const rideId = paramMap.get('id');
      this.loadData(rideId);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // tslint:disable-next-line:typedef
  async loadData(id) {
    this.ride = await this.service.getRideById(id);
    this.center = {
      lat: this.ride.route[0][0],
      lng: this.ride.route[0][1],
    };
  }


  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  parseInt(number1: any, base: number) {
    return parseInt(number1, base);
  }
}
