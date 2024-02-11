import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GameList } from '../../../interfaces/game-list';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private url!: string;
  private id!: string | null;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/games';
  }

  private getUserId() {
    let header: HttpHeaders | undefined;

    if (typeof window !== 'undefined') {
      if (localStorage.getItem('id') !== null) {
        this.id = localStorage.getItem('id');
      }
      if (sessionStorage.getItem('id') !== null) {
        this.id = sessionStorage.getItem('id');
      }
    }

    if (this.id !== null) {
      header = new HttpHeaders({
        'User-Id': this.id,
      });
    }

    return header;
  }

  public getGameList(query: string): Observable<GameList> {
    return this.http
      .get<GameList>(`${this.url}${query}`, { headers: this.getUserId() })
      .pipe(map(this.filterData));
  }

  private filterData(data: GameList): GameList {
    return {
      ...data,
      gameList: {
        ...data.gameList,
        games: data.gameList.games.map((game) => ({
          ...game,
          gameName: game.gameName.split('.')[0],
        })),
      },
    };
  }
}
