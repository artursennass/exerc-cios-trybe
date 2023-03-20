import { IDriveVehicles } from './interfaces';

export default class Car implements IDriveVehicles {
  drive(): void { console.log('Drive a car'); }
}
