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
      legenda: 'Espaço para discussão de assuntos diversos',
    },
    {
      title: 'Aulas Especificas',
      legenda: 'Aulas específicas para alunos com dificuldades em determinadas matérias',
    }
  ]
}
