import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from '../../../interfaces/user/user-data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public userData(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<UserData>(`${this.url}/user/data`, null, { headers });
  }
}
