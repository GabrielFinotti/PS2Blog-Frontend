import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ResRegister } from '../../../interfaces/responses/res-register';
import { UserRegister } from '../../../interfaces/user/user-register';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public userRegister(data: UserRegister) {
    return this.http.post<ResRegister>(`${this.url}/user/register`, data);
  }
}
