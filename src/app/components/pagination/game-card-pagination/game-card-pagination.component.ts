import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListService } from '../../../shared/services/gameList/game-list.service';
import { GameList } from '../../../interfaces/game-list';

@Component({
  selector: 'app-game-card-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-card-pagination.component.html',
  styleUrl: './game-card-pagination.component.scss',
})
export class GameCardPaginationComponent implements OnInit, OnChanges {
  @Output() private sendQuery = new EventEmitter<string>();
  @Input() public gameName!: string;
  protected gameListData!: GameList;
  public currentPage!: number;
  public query!: string;
  public stylePrevButton!: Record<string, string>;
  public styleNextButton!: Record<string, string>;

  constructor(private gameListService: GameListService) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.getPaginationData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['gameName'].currentValue !== changes['gameName'].previousValue
    ) {
      this.currentPage = 1;
      this.getPaginationData();
    }
  }

  protected getPaginationData() {
    this.query = `?page=${this.currentPage}&name=${this.gameName}`;

    this.gameListService.getGameList(this.query).subscribe((res: GameList) => {
      this.gameListData = res;
    });

    this.disableButton();
    this.sendQuery.emit(this.query);
  }

  protected nextPage() {
    if (this.currentPage < this.gameListData.gameList.totalPages) {
      this.currentPage++;
      this.query = this.gameListData.gameList.nextPage;
      this.getPaginationData();
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  protected prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.query = this.gameListData.gameList.prevPage;
      this.getPaginationData();
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  protected visiblePages() {
    const startPage = Math.max(this.currentPage - 2, 1);
    const endPage = Math.min(
      startPage + 2,
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

    this.disableButton();
    this.sendQuery.emit(this.query);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  public disableButton() {
    this.stylePrevButton = {
      opacity: this.currentPage === 1 ? '0.1' : '1',
    };

    if (this.gameListData) {
      this.styleNextButton = {
        opacity:
          this.currentPage === this.gameListData.gameList.totalPages
            ? '0.1'
            : '1',
      };
    }
  }
}
