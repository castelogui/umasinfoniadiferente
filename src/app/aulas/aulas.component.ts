import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.sass'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AulasComponent {
  aulas = [
    {
      name: 'Bateria',
      avatar: '../../assets/instrumentos/bateria.png',
    },
    {
      name: 'Violão',
      avatar: '../../assets/instrumentos/violão.png',
    },
    {
      name: 'Guitarra',
      avatar: '../../assets/instrumentos/guitarra.png',
    },
    {
      name: 'Teclado',
      avatar: '../../assets/instrumentos/teclado.png',
    },
    {
      name: 'Cajon',
      avatar: '../../assets/instrumentos/cajon.png',
    },
    {
      name: 'Percussão',
      avatar: '../../assets/instrumentos/percussão.png',
    },
    {
      name: 'Ukulele',
      avatar: '../../assets/instrumentos/ukulele.png',
    }
  ]
}
