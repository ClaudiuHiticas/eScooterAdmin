import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';

@Injectable({providedIn: 'root'})

// @ts-ignore
export class UsersService{

  constructor(private http: HttpClient) { }

  getUsers(): Promise<User[]> {
    try{
      return this.http.get<User[]>(
        `${environment.baseUrl}/users/all`,
        {responseType: 'json'}
      ).toPromise();
    } catch (e) {
      console.error(e);
    }
  }

  getUserById(id: string): Promise<User> {
    const url = `${environment.baseUrl}/users/${id}`;
    return this.http.get<User>(url).toPromise();
  }

  suspendUser(id: string): Promise<User> {
    const url = `${environment.baseUrl}/users/${id}/suspend`;
    return this.http.post<User>(url, {}).toPromise();
  }


}
