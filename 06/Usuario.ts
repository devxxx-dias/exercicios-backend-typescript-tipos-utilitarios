export type Pessoa = {
  nome: string;
  email: string;
  telefone: number;
  senha: string;
};

export class Usuario {
  public nome: string;
  public email: string;
  public telefone: number;
  private senha: string;

  constructor(pessoa: Pessoa) {
    this.nome = pessoa.nome;
    this.email = pessoa.email;
    this.telefone = pessoa.telefone;
    this.senha = pessoa.senha;
  }

  autenticar(senha: string) {
    if (senha === this.senha) {
      return `Usuario logado`;
    }
    return `Senha invalida`;
  }
}
