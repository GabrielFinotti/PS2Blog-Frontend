import { Component } from '@angular/core';
import { GameList } from '../../../interfaces/game-list';
import { GameListService } from '../../../shared/services/gameList/game-list.service';
import { ErrorMessage } from '../../../interfaces/error-message';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  protected gameList!: GameList;

  constructor(private gameListService: GameListService) {
    this.gameListService.getGameList().subscribe(
      (res) => {
        this.gameList = res;
      },
      (err: ErrorMessage) => {
        console.log(err.error.message);
      }
    );
  }
}
