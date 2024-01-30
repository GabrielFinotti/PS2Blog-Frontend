import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../interfaces/login-response';

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/user';
  }

  public userLogin(userData: FormGroup): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/login`, {
      email: userData.value['email'],
      password: userData.value['password'],
    });
  }

  public userRegister(userData: FormGroup): Observable<Object> {
    return this.http.post(`${this.url}/register`, {
      username: userData.value['userName'],
      email: userData.value['email'],
      password: userData.value['password'],
    });
  }

  public userUpdate(userData: FormGroup, id: string): Observable<Object> {
    return this.http.put(`${this.url}/update/${id}`, {
      username: userData.value['userName'],
      email: userData.value['email'],
      password: userData.value['password'],
    });
  }
}
