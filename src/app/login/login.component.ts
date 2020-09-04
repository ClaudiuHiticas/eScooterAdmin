import { Component, OnInit } from '@angular/core';
import {Admin} from '../shared/models/admin';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: Admin = {email: '', password: ''};
  hasError: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    try{
      this.hasError = false;
      const response = await this.authService.login(this.admin.email, this.admin.password);
      await this.router.navigateByUrl('/');
    } catch (e) {
      this.hasError = true;
      console.error(e);
    }

  }

  async logout() {
    try{
      await this.authService.logout();
      await this.router.navigateByUrl('/');
    } catch (e) {
      console.error(e);
    }

  }


}


