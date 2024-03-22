export class AdminUsers {
  id: string;
  nome: string;
  funcao: string;
  password: string;
  email: string;
  contact: string;
  permissao: string;
  insta: string;
  descricao: string;
  status: boolean;

  constructor(
    id: string,
    nome: string,
    funcao: string,
    password: string,
    email: string,
    contact: string,
    permissao: string,
    insta: string,
    descricao: string,
    status: boolean
  ) {
    this.id = id;
    this.nome = nome;
    this.funcao = funcao;
    this.password = password;
    this.email = email;
    this.contact = contact;
    this.permissao = permissao;
    this.insta = insta;
    this.descricao = descricao;
    this.status = status;
  }
}
