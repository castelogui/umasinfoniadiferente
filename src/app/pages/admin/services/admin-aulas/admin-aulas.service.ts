import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminAulas } from '../../classes/admin-aulas';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminAulasService {
  constructor(private _httpClient: HttpClient) {}
  private url = environment.apiUrl + '/aulas';

  getAulas(): Observable<AdminAulas[]> {
    return this._httpClient.get<AdminAulas[]>(this.url);
  }
  getAula(aula_id: any): Observable<AdminAulas> {
    return this._httpClient.get<AdminAulas>(`${this.url}/${aula_id}`);
  }
  saveAula(data: any): Observable<AdminAulas> {
    return this._httpClient.post<AdminAulas>(this.url, data);
  }
  editAula(aula_id: string, data: any): Observable<AdminAulas> {
    return this._httpClient.put<AdminAulas>(`${this.url}/${aula_id}`, data);
  }
  deleteAula(aula_id: any): Observable<AdminAulas> {
    return this._httpClient.delete<AdminAulas>(`${this.url}/${aula_id}`);
  }
}
