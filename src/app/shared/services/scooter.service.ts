import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Scooter} from '../models/scooter';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {

  constructor(private http: HttpClient) { }

  getScooters(): Promise<Scooter[]> {
    try{
      return this.http.get<Scooter[]>(
        `${environment.baseUrl}/scooters/all`,
        {responseType: 'json'}
      ).toPromise();
    } catch (e) {
      console.error(e);
    }
  }

  getScooterById(id): Promise<Scooter> {
    try{
      return this.http.get<Scooter>(
        `${environment.baseUrl}/scooters/${id}`,
        {responseType: 'json'}
      ).toPromise();
    } catch (e) {
      console.error(e);
    }
  }

  suspendScooter(id: string): Promise<Scooter> {
    const url = `${environment.baseUrl}/scooters/${id}/suspend`;
    return this.http.patch<Scooter>(url, {}).toPromise();
  }

}
