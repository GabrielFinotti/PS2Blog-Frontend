import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/user';
  }

  public userLogin(userData: FormGroup): Observable<Object> {
    return this.http.post(`${this.url}/login`, {
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
}
