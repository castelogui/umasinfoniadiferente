import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timeline } from 'src/app/classes/timeline';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  constructor(private _httpClient: HttpClient) {}
  private url = 'https://api-storage-umasinfoniadiferente.vercel.app/history';

  getTimeline(): Observable<Timeline[]> {
    return this._httpClient.get<Timeline[]>(this.url);
  }
}
