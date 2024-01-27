class Calculadora {
  constructor(private a: number, private b: number) {}

  somar(): number {
    return this.a + this.b;
  }

  subtrair(): number {
    return this.a - this.b;
  }
  multiplicar(): number {
    return this.a * this.b;
  }
  dividir(): number {
    return this.a / this.b;
  }
}

const calcular = new Calculadora(3, 1);

// console.log(calcular.somar());
// console.log(calcular.subtrair());
// console.log(calcular.multiplicar());
// console.log(calcular.dividir());

class Lampada {
  ligada = false;

  constructor(private potencia: number) {}
  ligar() {
    return (this.ligada = true);
  }

  desligar() {
    return (this.ligada = false);
  }

  potenciaEmWhats() {
    return `A lâmpada possui uma potência em Whats de ${
      this.potencia
    } e estar ${this.ligada ? "ligada" : "desligada"}`;
  }
}

const lampada = new Lampada(45);

// console.log(lampada.ligar());
// console.log(lampada.desligar());
// console.log(lampada.potenciaEmWhats());

class Fatura {
  private lancamento: {
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;
  };

  constructor(lancamento: {
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;
  }) {
    this.lancamento = lancamento;
  }

  transacoes: {
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;
  }[] = [];

  lancarTransacao(lancamento: {
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;
  }) {
    this.transacoes.push(lancamento);
  }

  imprimirTransacoes() {
    return this.transacoes.map((item) => {
      return {
        descricao: item.descricao,
        valor: item.valor,
        quantidade: item.quantidade,
      };
    });
  }

  imprimirFatura() {
    let valorTotalIntem: number = 0;
    let valorTotal: number = 0;
    const lancamentos: string[] = [];

    for (const transacao of this.transacoes) {
      valorTotalIntem = transacao.quantidade * transacao.valor;

      lancamentos.push(
        `${transacao.quantidade} - ${
          transacao.descricao
        } (R$ ${transacao.valor.toFixed(2)}) = R$ ${valorTotalIntem.toFixed(2)}`
      );

      valorTotal += valorTotalIntem;
    }

    return `Cliente: ${this.lancamento.nome}\n\n${lancamentos.join(
      "\n"
    )}\n\nTotal: R$ ${valorTotal.toFixed(2)}`;
  }
}

const novoLancamento = {
  nome: "Joao",
  descricao: "Camisa Preta",
  valor: 59.9,
  quantidade: 2,
};

const novoLancamento2 = {
  nome: "Joao",
  descricao: "Camisa Azul",
  valor: 79.0,
  quantidade: 1,
};
const novaFatura = new Fatura(novoLancamento);
novaFatura.lancarTransacao(novoLancamento);
novaFatura.lancarTransacao(novoLancamento2);
// console.log(novaFatura.imprimirTransacoes());
// console.log(novaFatura.imprimirFatura());

type People = {
  nome: string;
  idade: number;
  nomePai: string;
  nomeMae: string;
};

class Pessoa {
  constructor(
    private nome: string,
    private idade: number,
    private nomePai: string,
    private nomeMae: string
  ) {}

  saoIrmaos(pessoa1: People, pessoa2: People): boolean {
    if (
      pessoa1.nomePai === person2.nomePai &&
      pessoa1.nomeMae === pessoa2.nomeMae
    ) {
      return true;
    }

    return false;
  }

  ehMaisvelho(pessoa1: People, pessoa2: People): boolean {
    if (pessoa1.idade > pessoa2.idade) {
      return true;
    } else {
      return false;
    }
  }
}

const newPerson1 = new Pessoa("Sergio", 32, "Carlos", "Maria");
const newPerson2 = new Pessoa("Maria", 31, "Carlos", "Maria");

let person1: People = {
  nome: "Sergio",
  idade: 31,
  nomePai: "Carlos",
  nomeMae: "Maria",
};

let person2: People = {
  nome: "Maria",
  idade: 32,
  nomePai: "Carlos",
  nomeMae: "Maria",
};

console.log(newPerson1.saoIrmaos(person1, person2));
console.log(newPerson1.ehMaisvelho(person1, person2));
