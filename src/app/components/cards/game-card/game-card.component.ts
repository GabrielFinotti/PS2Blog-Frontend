import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GameList } from '../../../interfaces/game-list';
import { GameListService } from '../../../shared/services/gameList/game-list.service';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent implements OnInit, OnChanges {
  @Input() public query!: string;
  protected gameList!: GameList;

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
    if (this.query) {
      this.gameListService
        .getGameList(this.query)
        .subscribe((res: GameList) => {
          this.gameList = res;
        });
    }
  }
}
