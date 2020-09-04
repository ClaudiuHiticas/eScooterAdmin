import {Component, OnInit} from '@angular/core';
import {ScooterService} from '../../shared/services/scooter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scooter-new',
  templateUrl: './scooter-new.component.html',
  styleUrls: ['./scooter-new.component.css']
})
export class ScooterNewComponent implements OnInit {
  isNull: boolean;
  alreadyExist: boolean;

  constructor(private service: ScooterService, private router: Router) {
  }

  ngOnInit(): void {
    this.isNull = false;
    this.alreadyExist = false;
  }

  async exist(code: string) {
    const scooters = await this.service.getScooters();
    // console.log({scooters});

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < scooters.length; ++i) {
      // console.log('sc', scooters[i].code);
      return scooters[i].code === code;
    }
  }

    async saveScooter(code: string, internalId: string)
    {
      if (code === '' || internalId === '') {
        this.isNull = true;
        return;
      }
      if (await this.exist(code)) {
        this.alreadyExist = true;
        return;
      } else {
        try {
          this.isNull = false;
          this.service.addScooter(code, internalId).then();
          this.router.navigate(['/scooters']);
        } catch (e) {
          this.isNull = true;
          console.error(e);

        }
      }



    }
  }
