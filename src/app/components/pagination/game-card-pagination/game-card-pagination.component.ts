import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { GameListService } from '../../../shared/services/gameList/game-list.service';
import { GameList } from '../../../interfaces/game-list';

@Component({
  selector: 'app-game-card-pagination',
  standalone: true,
  imports: [],
  templateUrl: './game-card-pagination.component.html',
  styleUrl: './game-card-pagination.component.scss',
})
export class GameCardPaginationComponent implements OnInit, OnChanges {
  @Output() private sendQuery = new EventEmitter<string>();
  @Input() public gameName!: string;
  @Input() public currentPage!: number;
  protected gameListData!: GameList;
  public query!: string;

  constructor(private gameListService: GameListService) {}

  ngOnInit(): void {
    this.getGameListData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['gameName'].currentValue !== changes['gameName'].previousValue
    ) {
      console.log(
        `Paginação:\nGameName - ${this.gameName}\nPage - ${this.currentPage}\nQuery - ${this.query}`
      );
      this.getGameListData();
    }
  }

  protected getGameListData() {
    this.query = `?page=${this.currentPage}&name=${this.gameName}`;

    this.gameListService.getGameList(this.query).subscribe((res: GameList) => {
      this.gameListData = res;
    });
    console.log(this.query)
    this.sendQuery.emit(this.query);
  }

  protected nextPage() {
    if (this.currentPage < this.gameListData.gameList.totalPages) {
      this.currentPage++;
      this.query = this.gameListData.gameList.nextPage;
      this.getGameListData();
    }
  }

  protected prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.query = this.gameListData.gameList.prevPage;
      this.getGameListData();
    }
  }

  protected visiblePages() {
    const startPage = Math.max(this.currentPage - 2, 1);
    const endPage = Math.min(
      startPage + 3,
      this.gameListData.gameList.totalPages
    );

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  protected goToPage(page: number) {
    this.query = `?page=${page}&name=${this.gameName}`;
    this.currentPage = page;

    this.gameListService.getGameList(this.query).subscribe((res: GameList) => {
      this.gameListData = res;
    });

    this.sendQuery.emit(this.query);
  }
}
