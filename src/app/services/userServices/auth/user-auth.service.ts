import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserLogin } from '../../../interfaces/user/user-login';
import { ResLogin } from '../../../interfaces/responses/res-login';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public userLogin(data: UserLogin) {
    return this.http.post<ResLogin>(`${this.url}/user/login`, data);
  }
}
