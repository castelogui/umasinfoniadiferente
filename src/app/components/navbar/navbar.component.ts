import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  toggle = document.getElementsByClassName('navbar-collapse')
  toggleCollapse() {
    if (this.toggle[0].classList.contains('show'))
      this.toggle[0].classList.remove('show')
    else
      this.toggle[0].classList.add('show')
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.toggle[0].classList.remove('show')
    });
  }
}
