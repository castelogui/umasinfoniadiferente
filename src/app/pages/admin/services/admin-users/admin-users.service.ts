import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminUsers } from '../../classes/admin-users';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  constructor(private _httpClient: HttpClient) {}
  private url = 'https://api-storage-umasinfoniadiferente.vercel.app/users';

  getUsers(): Observable<AdminUsers[]> {
    return this._httpClient.get<AdminUsers[]>(this.url);
  }
}
