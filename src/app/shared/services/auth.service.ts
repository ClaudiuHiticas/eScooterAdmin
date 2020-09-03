import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Admin} from '../models/admin';

@Injectable({providedIn: 'root'})

export class AuthService {

  token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('auth');
  }

  isAuth(): boolean {
    return !!this.token;
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const result = await this.http.post(
        `${environment.baseUrl}/auth/login`,
        {email, password},
        {responseType: 'json'})
        .toPromise();

      const response: { user: any, accessToken: string } = JSON.parse(JSON.stringify(result));
      const accessToken: string = result.accessToken;

      localStorage.setItem('auth', accessToken);
      this.token = accessToken;

      return response;
    } catch (e) {
      console.error(e);
    }
  }


  async logout(): Promise<any> {
    try {
      const response = await this.http.post(
        `${environment.baseUrl}/auth/logout`,
        {},
        {responseType: 'json', headers: new HttpHeaders({Authorization: `Bearer ${this.token}`})})
        .toPromise();

      localStorage.removeItem('auth');
      this.token = null;

      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  // async getEmailById(id: string): Promise<string> {
  //   try{
  //     const email = await this.http.post(
  //       `${environment.baseUrl}/auth/logout`,
  //       { },
  //       {responseType: 'json'})
  //       .toPromise();
  //
  //     return '';
  //
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

}
