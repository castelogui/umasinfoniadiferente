import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-aulas',
  templateUrl: './card-aulas.component.html',
  styleUrls: ['./card-aulas.component.sass']
})
export class CardAulasComponent {
  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
}
