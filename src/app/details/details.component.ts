import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent {
  beneficios = [
    {
      title: 'Professores Exemplares',
      legenda: 'Professores que se destacam em suas áreas de atuação'
    },
    {
      title: 'Espaço Aberto',
      legenda: 'Espaço para diversas aulas e atividades musicais',
    },
    {
      title: 'Aulas Particulares',
      legenda: 'Aulas particulares para amantes da música',
    },
    {
      title: 'Preço Acessível',
      legenda: 'Preço acessível para todos os públicos',
    }
  ]
}
