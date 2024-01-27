export class Animal {
  nome: string;
  peso: number;
  altura: number;
  comprimento: number;

  constructor(nome: string, peso: number, altura: number, comprimento: number) {
    (this.nome = nome),
      (this.peso = peso),
      (this.altura = altura),
      (this.comprimento = comprimento);
  }

  comer() {
    return `Animal comendo`;
  }

  andar() {
    return `Animal andando`;
  }
}
