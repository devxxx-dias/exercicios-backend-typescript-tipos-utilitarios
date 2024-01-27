import { Animal } from "./Animal";

export class Cachorro extends Animal {
  constructor(nome: string, peso: number, altura: number, comprimento: number) {
    super(nome, peso, altura, comprimento);
  }

  latir() {
    return `Cachorro latindo`;
  }
}
