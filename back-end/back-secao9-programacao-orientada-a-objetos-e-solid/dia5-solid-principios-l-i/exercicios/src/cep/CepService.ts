// ./CepService.ts
import FooCepAPI from './FooCepAPI';
import IFooCepApi from './interfaces/IFooCepApi';

class CepService {
  private readonly cepApi: IFooCepApi;

  constructor(fooCepAPI: IFooCepApi) {
    this.cepApi = fooCepAPI;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;