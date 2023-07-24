import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent {
  eventos: LinhaDoTempo[] = [
    {
      ano: 2010,
      name: 'Evento 1',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultrices, nunc nisl ultr',
      img: '../../assets/eventos/evento1.jpg',
    },
    {
      ano: 2010,
      name: 'Evento 1',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultrices, nunc nisl ultr',
      img: '../../assets/eventos/evento1.jpg',
    },
    {
      ano: 2010,
      name: 'Evento 1',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultrices, nunc nisl ultr',
      img: '../../assets/eventos/evento1.jpg',
    }
  ]
}

export class LinhaDoTempo {
  ano: number = 0;
  name: string = '';
  descricao: string = '';
  img: string = '';
}
