import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutores } from 'src/app/classes/tutores';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TutoresService {
  constructor(private _httpClient: HttpClient) {}
  private url = environment.apiUrl + '/tutors';

  getTutores(): Observable<Tutores[]> {
    return this._httpClient.get<Tutores[]>(this.url);
  }
}
