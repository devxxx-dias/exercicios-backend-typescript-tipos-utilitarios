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
  tipoTransacao: Lowercase<"Debito" | "Credito">;
};

type CarrinhoEnderecoTransacaoMinuscula = Omit<Carrinho, "tipoTransacao"> &
  Endereco;

const carrinho = (info: CarrinhoEnderecoTransacaoMinuscula) => {
  return info;
};

carrinho({
  tipoTransacao: "debito",
  bairro: "centro",
  cartao: {
    numero: 123456,
    validade: "string",
    nome: "string",
    cvv: 120,
  },
  cep: "1234564564",
  cidade: "Amazonas",
  desconto: 10,
  estado: "BA",
  frete: 12,
  item: {
    nome: "string",
    descricao: "string",
    valor: 122,
  },
  qtd: 2,
  rua: "Rua 3",
});
