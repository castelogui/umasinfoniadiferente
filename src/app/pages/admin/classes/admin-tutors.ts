export class AdminTutors {
  id: string;
  avatar: string;
  nome: string;
  funcao: string;
  contact: string;
  insta: string;
  descricao: string;
  constructor(
    id: string,
    avatar: string,
    nome: string,
    funcao: string,
    contact: string,
    insta: string,
    descricao: string
  ) {
    this.id = id;
    this.avatar = avatar;
    this.nome = nome;
    this.funcao = funcao;
    this.contact = contact;
    this.insta = insta;
    this.descricao = descricao;
  }
}
