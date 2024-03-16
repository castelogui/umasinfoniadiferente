import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  project = {
    nome: 'Uma Sinfonia Diferente',
    local: 'R. Seringueira, 1856 - St. 1, Ariquemes - RO, 76870-142',
    email: 'projetousd@gmail.com',
    linkWapp: 'https://api.whatsapp.com/send?phone=556981062874',
    phone: '(69) 9 8106-2874',
    insta: 'umasinfoniadiferente',
    facebook: 'umasinfoniadiferente',
    creator: 'castelo-guilherme',
    creatorName: 'Guilherme Castelo'
  }
}
