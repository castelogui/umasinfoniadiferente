import { Component } from '@angular/core';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.sass']
})
export class TutoresComponent {
  tutores = [
    {
      avatar: '../../assets/tutores/samuel-bateria-01.jpeg',
      nome: 'Samuca',
      funcao: 'Bateria, Percussão e Musicalização',
      descricao: 'Professor de Bateria, Percussão e Musicalização',
    },
    {
      avatar: '../../assets/tutores/debora-teclado-01.jpeg',
      nome: 'Débora',
      funcao: 'Violão e Teclado',
      descricao: 'Professora de Violão e Teclado',
    },
    {
      avatar: '../../assets/tutores/guilherme-violao-01.jpeg',
      nome: 'Guilherme',
      funcao: 'Violão e Contra Baixo',
      descricao: 'Professor de Violão e Contra Baixo',
    },
    {
      avatar: '../../assets/tutores/franklin-guitarra-04.jpeg',
      nome: 'Franklin',
      funcao: 'Violão e Guitarrra',
      descricao: 'Professor de Violão e Guitarra',
    },

  ]
}
