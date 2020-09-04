import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {RideService} from '../../shared/services/ride.service';
import {Ride} from '../../shared/models/ride';
import {GoogleMap} from '@angular/google-maps';


@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})

export class RideDetailComponent implements OnInit, OnDestroy, AfterViewInit {

  ride: Ride;
  unsubscribe$ = new Subject();
  // @ViewChild(GoogleMap) map: GoogleMap;

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
    private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(paramMap => {
      const rideId = paramMap.get('id');
      this.loadData(rideId).then();
      // this.initMap();
    });
  }

  async ngAfterViewInit() {
    // await this.initMap();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async loadData(id) {
    this.ride = await this.service.getRideById(id);
    this.center = {
      lat: this.ride.route[1][0],
      lng: this.ride.route[1][1],
    };
    await this.initMap();

  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  parseInt(number1: any, base: number) {
    return parseInt(number1, base);
  }

  initMap() {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: 14,
      center: {lat: 46.754087, lng: 23.584168},
      mapTypeId: 'roadmap'
    });


    const route = [{lat: this.ride.route[0][0], lng: this.ride.route[0][1]}];
    for (const location of this.ride.route) {
      route.push({lat: location[0], lng: location[1]});
    }

    const flightPath = new google.maps.Polyline({
      path: route,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);
  }

}
