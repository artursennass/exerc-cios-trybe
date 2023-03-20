import fs from 'fs/promises';
import path from 'path';

export type FileType = 'plants' | 'opsInfo';

const PATHS = {
  plants: path.join(__dirname, '..', 'models', 'database', 'plantsData.json'),
  opsInfo: path.join(__dirname, '..', 'models', 'database', 'opsInfo.json'),
};

export class HandleFile {
  private PATHS = PATHS;

  async saveFile<T>(type: FileType, data: T): Promise<void> {
    await fs.writeFile(this.PATHS[`${type}`], JSON.stringify(data, null, 2));
  }

  async readFile<T>(type: FileType): Promise<T> {
    const dataRaw = await fs.readFile(this.PATHS[`${type}`], { encoding: 'utf-8' });
    const data: T = await JSON.parse(dataRaw);
    return data;
  }
}
