import {Scooter} from './scooter';
import {User} from './user';

export interface Ride {
  _id: string;
  userId: string;
  scooterId: string;
  startTs: Date;
  endTs?: Date;
  startLocation: [ number, number ];
  endLocation?: [ number, number ];
  route?: [number, number][];
  duration?: number;
  distance?: number;
  cost?: number;
  email?: string;
  scooter?: Scooter;
  user?: User;
}
