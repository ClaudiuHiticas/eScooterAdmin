export interface Scooter {
  _id: string;
  code: string;
  battery: number;
  internalId: string;
  status: string;
  locked: boolean;
  location: [number, number];
}
