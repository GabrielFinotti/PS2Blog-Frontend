import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Login } from '../../../interfaces/response/login';
import { UserLogin } from '../../../interfaces/user/user-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public userLogin(data: UserLogin) {
    return this.http.post<Login>(`${this.url}/user/login`, data);
  }

  public isAuthenticated() {
    let token = localStorage.getItem('token');

    if (!token) {
      token = sessionStorage.getItem('token');

      if (token) return true;
    } else {
      return true;
    }

    return false;
  }
}
