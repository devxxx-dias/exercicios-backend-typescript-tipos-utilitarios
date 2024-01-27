import { Arqueiro } from "./Arqueiro";
import { Mago } from "./Mago";

const mago = new Mago(5, "Anjo", 5);

const arqueiro = new Arqueiro(5, "Bruno", 5);

mago.usarMagia();
mago.usarMagia();
mago.usarMagia();
mago.usarMagia();
mago.usarMagia();
mago.usarMagia();
mago.criarMagia();
mago.criarMagia();

mago.andar();
mago.andar();
mago.andar();
mago.andar();
mago.andar();
mago.andar();
console.log(mago.velocidade);
mago.parar();
console.log(mago.velocidade);
