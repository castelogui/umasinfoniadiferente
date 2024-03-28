export class AdminAulas {
  id: string;
  instrumento: string;
  img: string;
  detalhes: string;
  niveis: boolean[];
  valor: number;
  constructor(
    id: string,
    instrumento: string,
    img: string,
    detalhes: string,
    niveis: boolean[],
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
