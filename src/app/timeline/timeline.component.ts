import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass'],
})
export class TimelineComponent {
  imageUrl =
    'https://scontent.fpvh2-1.fna.fbcdn.net/v/t1.18169-9/11229309_432613510234066_2827618956166566173_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3FLOf4j5QsgAX9suTk9&_nc_ht=scontent.fpvh2-1.fna&oh=00_AfD-v1zvRp5apWVEOYt0gRynt1cKjG0Ex77JhluoEhRFRw&oe=661D2915';

  eventos: LinhaDoTempo[] = [
    {
      date: new Date('Fri Sep 26 2014 00:00:00 GMT-0400'),
      name: 'Inicio do Projeto',
      descricao:
        ['Em 26 de Setembro de 2014 o projeto se inicia no centro cultural, como meio de trazer jovens pro âmbito musical. O registro que vemos é de Maio de 2015, com os alunos do sábado a tarde se divertindo na percussão.'],
      img: 'https://scontent.fpvh2-1.fna.fbcdn.net/v/t1.18169-9/11229309_432613510234066_2827618956166566173_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3FLOf4j5QsgAX9suTk9&_nc_ht=scontent.fpvh2-1.fna&oh=00_AfD-v1zvRp5apWVEOYt0gRynt1cKjG0Ex77JhluoEhRFRw&oe=661D2915',
    },
    {
      date: new Date('Wed Aug 19 2015 09:00:00 GMT-0400'),
      name: 'Novo espaço para aulas',
      descricao:
        ['Por volta de Agosto de 2015, o projeto conquista um novo espaço para as aulas.',' O espaço "O Bom Pastor" foi concedido pela igreja Presbiteriana Do Brasil, um lugar amplo, com salas para novas aulas e espaço para eventos. O projeto também ganha novos instrumentos ampliando as aulas para violão e teclado.'],
      img: 'https://scontent.fpvh2-1.fna.fbcdn.net/v/t31.18172-8/11865015_470784933083590_2791661995763147002_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=37POauEdcJsAX-AVyhd&_nc_ht=scontent.fpvh2-1.fna&oh=00_AfCnzXd-bHG3h3TjQX0CrqaZ8isWvkeXFQJDsocogQ759w&oe=661D252C',
    },
    {
      date: new Date('Sat Sep 26 2015 09:00:00 GMT-0400'),
      name: 'Aniversário de 1 ano',
      descricao:
        ['Comemorando o aniversário de 1 ano do projeto, ja com um novo local para aulas. Um evento público aberto a todos, com um café da manhã e apresentações de alunos e músicos participantes.'],
      img: 'https://scontent.fpvh2-1.fna.fbcdn.net/v/t31.18172-8/12001012_484442095051207_210185770524115001_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8Nd3u1T6UvoAX_D7Bto&_nc_ht=scontent.fpvh2-1.fna&oh=00_AfCb0n1ito9yPQfutZ714sJMDRzLfOBoDqPXPUWmipf18Q&oe=661D2B92',
    },
    {
      date: new Date(),
      name: 'Evento 1',
      descricao:
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultrices, nunc nisl ultr'],
      img: '../../assets/eventos/evento1.jpg',
    },
  ];
}

export class LinhaDoTempo {
  date: Date = new Date();
  name: string = '';
  descricao: string[] = [''];
  img: string = '';
}
