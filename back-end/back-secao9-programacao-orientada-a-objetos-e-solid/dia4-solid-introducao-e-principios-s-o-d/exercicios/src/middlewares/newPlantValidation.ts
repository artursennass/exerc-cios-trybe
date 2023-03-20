import IPlant from '../interfaces/IPlant';

export default class NewPlantValidation {
  static newPlantValidation(plant: Omit<IPlant, 'id' | 'waterFrequency'>) {
    if (typeof plant.breed !== 'string') {
      return {
        message: 'Attribute "breed" must be string.',
      };
    }

    if (typeof plant.needsSun !== 'boolean') {
      return {
        message: 'Attribute "needsSun" must be boolean.',
      };
    }

    if (typeof plant.origin !== 'string') {
      return {
        message: 'Attribute "origin" must be string.',
      };
    }

    if (typeof plant.size !== 'number') {
      return {
        message: 'Attribute "size" must be number.',
      };
    }

    return undefined;
  }
}
