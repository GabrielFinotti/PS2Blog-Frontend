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
      console.log(`Card Game:\n Query - ${this.query}`);
      this.getGameList();
    }
  }

  private getGameList() {
    this.gameListService.getGameList(this.query).subscribe((res: GameList) => {
      this.gameList = res;
    });
  }
}
