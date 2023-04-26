import { INewPlant } from '../interfaces/IPlant';

export default class WaterFrequency {
  static calculateWaterFrequency(plant: INewPlant): number {
    return (plant.needsSun
      ? plant.size * 0.77 + (plant.origin === 'Brazil' ? 8 : 7)
      : (plant.size / 2) * 1.33 + (plant.origin === 'Brazil' ? 8 : 7));
  }
}
