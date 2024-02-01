import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataResponse } from '../../interfaces/user-data-response';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/user';
  }

  public getUserName(id: string): Observable<UserDataResponse> {
    return this.http.post<UserDataResponse>(
      `${this.url}/data/${id}`,
      null
    );
  }
}
