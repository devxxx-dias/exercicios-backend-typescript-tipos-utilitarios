import { Animal } from "./Animal";

export class Gato extends Animal {
  constructor(nome: string, peso: number, altura: number, comprimento: number) {
    super(nome, peso, altura, comprimento);
  }

  miar() {
    return `Gato miando`;
  }
}
