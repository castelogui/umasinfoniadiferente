import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  // ao clicar no botão, verifica se existe a variavel show, se existir remove, se não existir adiciona
  toggleCollapse() {
    let toggle = document.getElementsByClassName('navbar-collapse')
    if (toggle[0].classList.contains('show'))
      toggle[0].classList.remove('show')
    else
      toggle[0].classList.add('show')
  }
}
