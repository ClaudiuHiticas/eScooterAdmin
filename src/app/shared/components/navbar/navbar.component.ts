import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login: LoginComponent) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  async logout() {
    await this.login.logout();
  }
}
