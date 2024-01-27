import { Personagem } from "./Personagem";

export class Mago extends Personagem {
  magia: number;

  constructor(magia: number, nome: string, velocidade: number) {
    super(nome, velocidade);
    this.magia = 5;
  }

  usarMagia() {
    if (this.magia === 0) {
      return `Magia indisponivel`;
    }

    this.magia--;
    return `Magia usada`;
  }

  criarMagia() {
    return this.magia++;
  }
}
