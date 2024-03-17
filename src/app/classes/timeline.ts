export class Timeline {
  id: string;
  date: Date;
  name: string;
  descricao: string[];
  img: string;

  constructor(
    id: string,
    date: Date,
    name: string,
    descricao: string[],
    img: string
  ) {
    this.id = id;
    this.date = date;
    this.name = name;
    this.descricao = descricao;
    this.img = img;
  }
}
