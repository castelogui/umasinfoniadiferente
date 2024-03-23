import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminEventos } from '../../classes/admin-eventos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminEventosService {
  constructor(private _httpClient: HttpClient) {}
  private url = environment.apiUrl + '/history';

  getEvents(): Observable<AdminEventos[]> {
    return this._httpClient.get<AdminEventos[]>(this.url);
  }
  getEvent(event_id: any): Observable<AdminEventos> {
    return this._httpClient.get<AdminEventos>(`${this.url}/${event_id}`);
  }
  saveEvent(data: any): Observable<AdminEventos> {
    return this._httpClient.post<AdminEventos>(this.url, data);
  }
  editEvent(event_id: string, data: any): Observable<AdminEventos> {
    return this._httpClient.put<AdminEventos>(`${this.url}/${event_id}`, data);
  }
  deleteEvent(event_id: any): Observable<AdminEventos> {
    return this._httpClient.delete<AdminEventos>(`${this.url}/${event_id}`);
  }
}
