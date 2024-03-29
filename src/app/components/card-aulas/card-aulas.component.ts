import { Component, Input } from '@angular/core';
import { instrumento } from '../../pages/aulas/aulas.component';

@Component({
  selector: 'app-card-aulas',
  templateUrl: './card-aulas.component.html',
  styleUrls: ['./card-aulas.component.sass'],
})
export class CardAulasComponent {
  @Input() instrumento: instrumento = new instrumento();
  inscricao(id: number) {
    localStorage.setItem('instrumento', JSON.stringify(this.instrumento));
  }
}
