import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormUser } from '../../model/interfaces/form-user';

@Injectable({
  providedIn: 'root',
})
export class FormUserService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  // Buscar Usuário
  public getUser(email: string, password: string): Observable<Array<FormUser>> {
    return this.http.get<Array<FormUser>>(`${this.url}/user`);
  }

  // Cadastrar usuário
  public setUser(
    user: string,
    email: string,
    password: string
  ): Observable<Array<FormUser>> {
    return this.http.post<Array<FormUser>>(`${this.url}/user`, {
      user: user,
      email: email,
      password: password,
    });
  }

  // Deletar usuário
  public deleteUser(id: number) {
    return this.http.delete(`${this.url}/user/${id}`);
  }
}
