import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GameList } from '../../../interfaces/game-list';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/games';
  }

  public getGameList(query: string): Observable<GameList> {
    return this.http
      .get<GameList>(`${this.url}${query}`)
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
