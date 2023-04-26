import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraFutebol extends Quadra<IFutebol> {
    protected gameType: IFutebol = normas.futebol;

    reservar(date: Date): IAgenda<IFutebol> {
        return {
            protocolo: Math.random().toString(),
            data: date,
            regras: this.gameType,
        }
    }
}