type Conn = {
  username: string;
  password: string;
  host: string;
  port: string;
  dbname: string;
};

type Connection = {
  driver: string;
  url: string;
};

//Para usar o comando Readonly - voce precisa criar um tipo especifico pra isso para ser usado como retorno, pois do contrario ainda sim e possivel alterar.
const conexao = (dados: Conn): Readonly<Connection> => {
  const { username, password, host, port, dbname } = dados;
  return {
    driver: "postgres",
    url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`,
  };
};

let conn = conexao({
  username: "string",
  password: "string",
  host: "string",
  port: "string",
  dbname: "string",
});

// conn.driver = "amor" ;
