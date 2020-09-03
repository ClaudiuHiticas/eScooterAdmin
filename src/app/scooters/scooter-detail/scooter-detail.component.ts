import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Scooter} from '../../shared/models/scooter';
import {ScooterService} from '../../shared/services/scooter.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-scooter-detail',
  templateUrl: './scooter-detail.component.html',
  styleUrls: ['./scooter-detail.component.css']
})
export class ScooterDetailComponent implements OnInit, OnDestroy {

  scooter: Scooter;
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
    private service: ScooterService,
    private router: Router) {
  }

  async refreshMap(): Promise<void> {
    const refreshInterval = 1000 * 10;
    setInterval(async () => {
      this.scooter = await this.service.getScooterById(this.scooter._id);
      console.log('Refreshed');
    }, refreshInterval);
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(paramMap => {
      const scooterId = paramMap.get('id');
      this.loadData(scooterId);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async loadData(id) {
    this.scooter = await this.service.getScooterById(id);
    this.center = {
      lat: this.scooter.location[0],
      lng: this.scooter.location[1],
    };
    this.refreshMap();
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  async suspendScooter(id) {
    this.scooter = await this.service.suspendScooter(id);
  }

}
