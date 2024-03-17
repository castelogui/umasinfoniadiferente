import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutores } from 'src/app/classes/tutores';

@Injectable({
  providedIn: 'root',
})
export class TutoresService {
  constructor(private _httpClient: HttpClient) {}
  private url = 'https://api-storage-umasinfoniadiferente.vercel.app/tutors';

  getTutores(): Observable<Tutores[]> {
    return this._httpClient.get<Tutores[]>(this.url);
  }
}
