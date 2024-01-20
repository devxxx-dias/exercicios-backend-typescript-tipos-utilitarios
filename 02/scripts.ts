type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: "credito" | "Debito";
  cartao: Cartao;
};

type Endereco = {
  rua: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
};

type CarrinhoEnderecoTransacaoMinuscula = Omit<Carrinho, "tipoTransacao"> & {
  endereco: Endereco;
  tipoTransacao: Lowercase<"Debito" | "Credito">;
};
//A correcao foi aqui! Ufa! Compare os dois commits para ver o que eu havia feito! Aqui eu posso criar um objeto que recebe tanto um Type como uma propriedade, ai la embaixo e so lancar o endereco dentro do objeto, e o novo tipo transacao!

const carrinho = (info: CarrinhoEnderecoTransacaoMinuscula) => {
  return info;
};

carrinho({
  tipoTransacao: "debito",

  cartao: {
    numero: 123456,
    validade: "string",
    nome: "string",
    cvv: 120,
  },
  endereco: {
    rua: "Rua 3",
    bairro: "centro",
    cep: "1234564564",
    cidade: "Amazonas",
    estado: "BA",
  },
  desconto: 10,
  frete: 12,
  item: {
    nome: "string",
    descricao: "string",
    valor: 122,
  },
  qtd: 2,
});
