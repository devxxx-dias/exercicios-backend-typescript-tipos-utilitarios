export class Personagem {
  nome: string;
  velocidade: number;

  constructor(nome: string, velocidade: number) {
    this.nome = nome;
    this.velocidade = 0;
  }

  andar() {
    this.velocidade++;
  }

  parar() {
    this.velocidade = 0;
  }
}
