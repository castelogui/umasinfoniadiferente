export class AdminAulas {
  id: string;
  instrumento: string;
  img: string;
  detalhes: string;
  niveis: string;
  valor: number;
  constructor(
    id: string,
    instrumento: string,
    img: string,
    detalhes: string,
    niveis: string,
    valor: number
  ) {
    this.id = id;
    this.instrumento = instrumento;
    this.img = img;
    this.detalhes = detalhes;
    this.niveis = niveis;
    this.valor = valor;
  }
}
