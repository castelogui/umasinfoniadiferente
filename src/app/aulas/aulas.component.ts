import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.sass'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AulasComponent {
  instrumentos: instrumento[] = [
    {
      id: 1,
      name: 'Bateria',
      avatar: '../../assets/instrumentos/bateria.png',
    },
    {
      id: 2,
      name: 'Violão',
      avatar: '../../assets/instrumentos/violão.png',
    },
    {
      id: 3,
      name: 'Guitarra',
      avatar: '../../assets/instrumentos/guitarra.png',
    },
    {
      id: 4,
      name: 'Teclado',
      avatar: '../../assets/instrumentos/teclado.png',
    },
    {
      id: 5,
      name: 'Cajon',
      avatar: '../../assets/instrumentos/cajon.png',
    },
    {
      id: 6,
      name: 'Percussão',
      avatar: '../../assets/instrumentos/percussão.png',
    },
    {
      id: 7,
      name: 'Ukulele',
      avatar: '../../assets/instrumentos/ukulele.png',
    },
    {
      id: 8,
      name: 'Contra-baixo',
      avatar: '../../assets/instrumentos/contra-baixo.png',
    }
  ]
}

export class instrumento {
  id: number = 0;
  name: string = '';
  avatar: string = '';
}
