import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GamesList } from '../../interfaces/response/games-list';

@Injectable({
  providedIn: 'root',
})
export class GamesListService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public getGamesList(token: string, query: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<GamesList>(`${this.url}/games${query}`, {
      headers,
    });
  }
}
