import { HandleFile } from './handleFile';
import IPlant from '../interfaces/IPlant';
import IOpsInfo from './interfaces/IOpsInfo';

export default class PlantModel {
  private handleFile = new HandleFile();

  async getAll(): Promise<IPlant[]> {
    const plants = await this.handleFile.readFile<IPlant[]>('plants');
    return plants;
  }

  async updateOpsInfo(): Promise<IOpsInfo> {
    const opsInfo: IOpsInfo = await this.handleFile.readFile<IOpsInfo>('opsInfo');
    await this.handleFile.saveFile('opsInfo', opsInfo);
    return opsInfo;
  }

  async create(newPlant: IPlant): Promise<void> {
    const plants: IPlant[] = await this.handleFile.readFile<IPlant[]>('plants');
    plants.push(newPlant);
    await this.handleFile.saveFile('plants', plants);
  }
}
