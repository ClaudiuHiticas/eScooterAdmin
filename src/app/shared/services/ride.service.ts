import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Scooter} from '../models/scooter';
import {environment} from '../../../environments/environment';
import {Ride} from '../models/ride';

@Injectable({
  providedIn: 'root'
})

export class RideService {

  constructor(private http: HttpClient) { }



  getRides(): Promise<Ride[]> {
    try{
      return this.http.get<Ride[]>(
        `${environment.baseUrl}/ride/all`,
        {responseType: 'json'}
      ).toPromise();
    } catch (e) {
      console.error(e);
    }
  }

  async getRideById(id): Promise<Ride> {
    try{
      return this.http.get<Ride>(
        `${environment.baseUrl}/ride/${id}`,
        {responseType: 'json'}
      ).toPromise();
    } catch (e) {
      console.error(e);
    }
  }
}
