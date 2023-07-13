import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-aulas',
  templateUrl: './card-aulas.component.html',
  styleUrls: ['./card-aulas.component.sass']
})
export class CardAulasComponent {
  @Input() aula: any;
}
