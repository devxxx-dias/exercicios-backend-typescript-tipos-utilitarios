import { Animal } from "./Animal";

export class Baleia extends Animal {
  constructor(nome: string, peso: number, altura: number, comprimento: number) {
    super(nome, peso, altura, comprimento);
  }

  nadar() {
    return `Baleia nadando`;
  }
}
