import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserNameResponse } from '../../interfaces/user-name-response';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/user';
  }

  public getUserName(id: string): Observable<UserNameResponse> {
    return this.http.post<UserNameResponse>(
      `${this.url}/data/${id}`,
      null
    );
  }
}
