import { Component, OnInit } from '@angular/core';
import { AdminEventosService } from '../../services/admin-eventos/admin-eventos.service';
import { AdminEventos } from '../../classes/admin-eventos';

@Component({
  selector: 'app-admin-eventos',
  templateUrl: './admin-eventos.component.html',
  styleUrls: ['./admin-eventos.component.sass'],
})
export class AdminEventosComponent implements OnInit {
  constructor(private _eventService: AdminEventosService) {}
  public events: AdminEventos[] = [];
  public eventEdit: AdminEventos = {} as AdminEventos;

  ngOnInit(): void {
    this.getEventos();
  }
  getEventos() {
    this._eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }
  getEvent(event_id: string) {
    this._eventService.getEvent(event_id).subscribe((event) => {
      this.eventEdit = event;
    });
  }
  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }
}
