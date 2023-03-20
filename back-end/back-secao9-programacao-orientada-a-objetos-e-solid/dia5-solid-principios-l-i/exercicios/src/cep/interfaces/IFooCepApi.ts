export default interface IFooCepApi {
    getAddressByCEP(cep: string, number: number): Promise<string>
    getCepByAddress(address: string, number: number): Promise<string>
}