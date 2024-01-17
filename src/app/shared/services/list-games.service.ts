import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListGamesService {
  // Variáveis do serviço
  private url!: string;
  constructor(private http: HttpClient) {}

  public requestData() {}
}
