import { Component, OnInit } from '@angular/core';
import {Scooter} from '../shared/models/scooter';
import {ScooterService} from '../shared/services/scooter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  scooters: Scooter[];
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
  };

  constructor(
    private scooterService: ScooterService,
    private router: Router
  ) { }

  async refreshMap(): Promise<void> {
    const refreshInterval = 1000 * 10;
    setInterval(async () => {
      this.scooters = await this.scooterService.getScooters();
      console.log('Refreshed');
    }, refreshInterval);
  }


  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 46.753683,
        lng: 23.584400,
      };
    });
    this.loadData().then();
  }

  openInfo(scooterId: string) {
    this.router.navigate(['/scooters/', scooterId]).then();
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  async loadData() {
    this.scooters = await this.scooterService.getScooters();
    this.refreshMap();
  }


}
