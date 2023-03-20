import { IFlyVehicles } from './interfaces';

export default class AirPlane implements IFlyVehicles {
  fly(): void { console.log('Flying a futuristic car'); }
}
