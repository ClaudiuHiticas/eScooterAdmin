import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Scooter} from '../shared/models/scooter';
import {ScooterService} from '../shared/services/scooter.service';

@Component({
  selector: 'app-scooters',
  templateUrl: './scooters.component.html',
  styleUrls: ['./scooters.component.css']
})
export class ScootersComponent implements OnInit {

  scooters: Scooter[];

  constructor(private scooterService: ScooterService, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.loadData();
  }

  // tslint:disable-next-line:typedef
  async loadData() {
  this.scooters = await this.scooterService.getScooters();

  }

  gotoDetail(id: string): void {
    this.router.navigate(['/scooters/', id]);
  }

  async newScooter() {
    await this.router.navigate(['/scooters/new']);
  }
}
