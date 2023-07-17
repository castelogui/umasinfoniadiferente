import { Component, Input } from '@angular/core';
import { instrumento } from '../aulas/aulas.component';

@Component({
  selector: 'app-card-aulas',
  templateUrl: './card-aulas.component.html',
  styleUrls: ['./card-aulas.component.sass']
})
export class CardAulasComponent {
  @Input() instrumento: instrumento = new instrumento();
}
