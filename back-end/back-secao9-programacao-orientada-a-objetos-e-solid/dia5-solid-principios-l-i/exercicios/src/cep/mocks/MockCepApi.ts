import IFooCepApi from "../interfaces/IFooCepApi";

export default class MockCepApi implements IFooCepApi {
    getAddressByCEP(cep: string, number: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getCepByAddress(address: string, number: number): Promise<string> {
        throw new Error("Method not implemented.");
    }

}

//para usar no teste é so chamar esse cara em vez do FooCepApi no teste