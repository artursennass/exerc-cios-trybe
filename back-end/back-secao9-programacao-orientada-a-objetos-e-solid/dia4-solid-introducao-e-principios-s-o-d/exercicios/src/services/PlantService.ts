import HttpException from '../exceptions/HttpException';
import IPlant, { INewPlant } from '../interfaces/IPlant';
import NewPlantValidation from '../middlewares/newPlantValidation';
// import { IModel } from '../models/interfaces/IModel';
import PlantModel from '../models/PlantModel';
import WaterFrequency from './utils';

class PlantService {
  private model: PlantModel = new PlantModel();
  // readonly model: IModel<IPlant>;

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const opsInfo = await this.model.updateOpsInfo();
    opsInfo.createdPlants += incrementAmount;

    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants: IPlant[] = await this.model.getAll();
    return plants;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    const error = NewPlantValidation.newPlantValidation(plant);
    if (error !== undefined) {
      throw new HttpException(400, error.message);
    }

    const waterFrequency = WaterFrequency.calculateWaterFrequency(plant);

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant, waterFrequency };

    await this.model.create(newPlant);

    return newPlant;
  }
}

export default PlantService;
