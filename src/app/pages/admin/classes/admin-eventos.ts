export class AdminEventos {
  id: string;
  date: Date;
  updatedAt: Date;
  name: string;
  descricao: string[];
  img: string;
  constructor(
    id: string,
    date: Date,
    updatedAt: Date,
    name: string,
    descricao: string[],
    img: string
  ) {
    this.id = id;
    this.date = date;
    this.updatedAt = updatedAt;
    this.name = name;
    this.descricao = descricao;
    this.img = img;
  }
}
