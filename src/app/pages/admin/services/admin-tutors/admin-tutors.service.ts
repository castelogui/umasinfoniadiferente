import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminTutors } from '../../classes/admin-tutors';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminTutorsService {
  constructor(private _httpClient: HttpClient) {}
  private url = environment.apiUrl + '/tutors';

  getTutors(): Observable<AdminTutors[]> {
    return this._httpClient.get<AdminTutors[]>(this.url);
  }
  getTutor(tutor_id: any): Observable<AdminTutors> {
    return this._httpClient.get<AdminTutors>(`${this.url}/${tutor_id}`);
  }
  saveTutor(data: any): Observable<AdminTutors> {
    return this._httpClient.post<AdminTutors>(this.url, data);
  }
  editTutor(tutor_id: string, data: any): Observable<AdminTutors> {
    return this._httpClient.put<AdminTutors>(`${this.url}/${tutor_id}`, data);
  }
  deleteTutor(tutor_id: any): Observable<AdminTutors> {
    return this._httpClient.delete<AdminTutors>(`${this.url}/${tutor_id}`);
  }
}
