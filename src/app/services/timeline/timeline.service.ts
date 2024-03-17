import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timeline } from 'src/app/classes/timeline';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  constructor(private _httpClient: HttpClient) {}
  private url = 'http://localhost:3000/history';

  getTimeline(): Observable<Timeline[]> {
    return this._httpClient.get<Timeline[]>(this.url);
  }
}
