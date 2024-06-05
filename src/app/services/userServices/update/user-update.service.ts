import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserUpdate } from '../../../interfaces/user/user-update';
import { ResUpdate } from '../../../interfaces/responses/res-update';

@Injectable({
  providedIn: 'root',
})
export class UserUpdateService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public userUpdate(data: UserUpdate, token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.put<ResUpdate>(`${this.url}/user/update`, data, {
      headers,
    });
  }
}
