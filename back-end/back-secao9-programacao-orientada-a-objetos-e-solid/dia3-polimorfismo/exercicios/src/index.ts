import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();

const quadraFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraFutebol);

const reserva = quadraFutebol.reservar(new Date().getDate())

console.log(reserva);
