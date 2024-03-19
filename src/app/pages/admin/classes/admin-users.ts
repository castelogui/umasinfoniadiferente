export class AdminUsers {
  id: string;
  avatar: string;
  nome: string;
  funcao: string;
  password: string;
  email: string;
  contact: string;
  permissoes: string[];
  insta: string;
  descricao: string;

  constructor(
    id: string,
    avatar: string,
    nome: string,
    funcao: string,
    password: string,
    email: string,
    contact: string,
    permissoes: string[],
    insta: string,
    descricao: string
  ) {
    this.id = id;
    this.avatar = avatar;
    this.nome = nome;
    this.funcao = funcao;
    this.password = password;
    this.email = email;
    this.contact = contact;
    this.permissoes = permissoes;
    this.insta = insta;
    this.descricao = descricao;
  }
}
