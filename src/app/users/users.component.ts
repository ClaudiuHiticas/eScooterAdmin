import {Component, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../shared/services/users.service';
import {User} from '../shared/models/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

class EventEmitter<T> {
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];


  constructor(private userService: UsersService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  // tslint:disable-next-line:typedef
  async loadData() {
    this.users = await this.userService.getUsers();
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/users/', id]);
  }



}
