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
      contact: '556981062874',
      insta: 'samuelmatos.s',
      descricao: 'Professor de Bateria, Percussão e Musicalização',
    },
    {
      avatar: '../../assets/tutores/amanda-milan.jpg',
      nome: 'Amanda',
      funcao: 'Violão,Teclado e Contra-Baixo',
      contact: '556984137665',
      insta: 'amanda.milan',
      descricao: 'Professora de Violão, Teclado e Contra-Baixo',
    }
    /**{
      avatar: '../../assets/tutores/guilherme-violao-01.jpeg',
      nome: 'Guilherme',
      funcao: 'Violão e Contra Baixo',
      descricao: 'Professor de Violão e Contra Baixo',
    },*/
    /**{
      avatar: '../../assets/tutores/franklin-guitarra-04.jpeg',
      nome: 'Franklin',
      funcao: 'Violão e Guitarrra',
      descricao: 'Professor de Violão e Guitarra',
    }*/
  ]
}
