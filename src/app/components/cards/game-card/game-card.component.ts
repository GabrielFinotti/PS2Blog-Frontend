import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
export class GameCardComponent implements OnInit, OnChanges {
  protected gameList!: GameList;
  @Input() public query!: string;

  constructor(private gameListService: GameListService) {}

  ngOnInit(): void {
    this.getGameList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['query'].currentValue !== changes['query'].previousValue) {
      this.getGameList();
    }
  }

  private getGameList() {
    this.gameListService.getGameList(this.query).subscribe(
      (res: GameList) => {
        this.gameList = res;
      },
      (err: ErrorMessage) => {
        console.log(err.error.message);
      }
    );
  }
}
