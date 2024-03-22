import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.sass'],
})
export class AdminNavbarComponent implements OnInit {
  constructor(private router: Router) {}
  public routeActive: string = '';

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.routeActive =
        this.router.routerState.snapshot.url.split('/admin/')[1];
    });
  }
}
