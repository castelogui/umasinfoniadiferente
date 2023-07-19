import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.sass']
})
export class MenuNavComponent {
  menu: Menu[] = [
    {
      id: 1,
      name: 'Home',
      icon: 'home',
      url: '/',
      children: []
    },
    {
      id: 2,
      name: 'Aulas',
      icon: 'school',
      url: '/aulas',
      children: []
    },
    {
      id: 3,
      name: 'Inscrição',
      icon: 'subscriptions',
      url: '/inscricao',
      children: []
    },
    {
      id: 4,
      name: 'Sobre',
      icon: 'info',
      url: '/sobre',
      children: []
    }
  ];
  ngOnInit(): void {
    this.alterPage();
  }

  //ao alterar a página deve fazer o scroll para o topo 
  //se estiver no mobile deve fechar o menu
  alterPage() {
    this.menu.forEach((item) => {
      let i = document.getElementById('navbar-item-' + item.id)
      i?.addEventListener('click', () => {
        this.scrollToTop();
        console.log(i);
      });
    });
  }

  //funcao para rolar a página autual para o topo
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

export class Menu {
  id: number = 0;
  name: string = '';
  icon: string = '';
  url: string = '';
  children: Menu[] = [];
}