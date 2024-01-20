type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

const cadastrarUsuário = (info: Usuario): Usuario => {
  return info;
};

const cadastroSemRg = (
  info: Required<Omit<Usuario, "rg">>
): Omit<Usuario, "rg"> => {
  return info;
};

const pessoa1 = cadastroSemRg({
  nome: "Jose",
  email: "jose@email.com",
  cpf: "33333333314",
  dataNacimento: "07/02/2004",
});
