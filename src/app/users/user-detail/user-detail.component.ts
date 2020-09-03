import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../shared/services/users.service';
import {takeUntil} from 'rxjs/operators';
import {User} from '../../shared/models/user';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  user: User;
  unsubscribe$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(paramMap => {
      const userId = paramMap.get('id');
      this.loadData(userId);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // tslint:disable-next-line:typedef
  async loadData(id) {
    this.user = await this.service.getUserById(id);
  }

  // tslint:disable-next-line:typedef
  async suspendUser(id) {
    this.user = await this.service.suspendUser(id);
  }

}
