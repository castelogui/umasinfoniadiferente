import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.sass'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AulasComponent {
  names = ['Bateria', 'Violão', 'Teclado', 'Guitarra', 'Baixo', 'Canto', 'Ukulele', 'Percussão'];
}
