import { Component, OnInit } from '@angular/core';
import { AdminEventosService } from '../../services/admin-eventos/admin-eventos.service';
import { AdminEventos } from '../../classes/admin-eventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-eventos',
  templateUrl: './admin-eventos.component.html',
  styleUrls: ['./admin-eventos.component.sass'],
})
export class AdminEventosComponent implements OnInit {
  constructor(
    private _eventService: AdminEventosService,
    private router: Router
  ) {}
  public events: AdminEventos[] = [];

  ngOnInit(): void {
    this.getEventos();
  }
  getEventos() {
    this._eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }
  reload() {
    this.router.navigate(['/admin/events']).then(() => {
      window.location.reload();
    });
  }
  editEvent(event_id: string) {
    this.router.navigate(['/admin/events'], { queryParams: { id: event_id } });
  }
  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }
}
