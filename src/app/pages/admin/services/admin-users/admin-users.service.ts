import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminUsers } from '../../classes/admin-users';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  constructor(private _httpClient: HttpClient) {}
  private url = environment.apiUrl + '/users';

  getUsers(): Observable<AdminUsers[]> {
    return this._httpClient.get<AdminUsers[]>(this.url);
  }
  getUser(user_id: any): Observable<AdminUsers> {
    return this._httpClient.get<AdminUsers>(`${this.url}/${user_id}`);
  }
  saveUser(data: any): Observable<AdminUsers> {
    return this._httpClient.post<AdminUsers>(this.url, data);
  }
  editUser(user_id: string, data: any): Observable<AdminUsers> {
    return this._httpClient.put<AdminUsers>(`${this.url}/${user_id}`, data);
  }
  deleteUser(user_id: any): Observable<AdminUsers> {
    return this._httpClient.delete<AdminUsers>(`${this.url}/${user_id}`);
  }
}
