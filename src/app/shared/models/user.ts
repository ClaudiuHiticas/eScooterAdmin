export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdTs: Date;
  suspended: boolean;
  rideCount: number;
  driverLicenseUrl: string;
}
