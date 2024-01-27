import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
  flechas: number;

  constructor(flechas: number, nome: string, velocidade: number) {
    super(nome, velocidade);
    this.flechas = 5;
  }

  lancarFlexa() {
    if (this.flechas === 0) {
      return `Sem flexas disponiveis`;
    }

    this.flechas--;
    return `flechas usada`;
  }

  criarflechas() {
    return this.flechas++;
  }
}
