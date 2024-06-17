import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../../../interfaces/response/register';
import { UserRegister } from '../../../interfaces/user/user-register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public userRegister(data: UserRegister) {
    return this.http.post<Register>(`${this.url}/user/register`, data);
  }
}
