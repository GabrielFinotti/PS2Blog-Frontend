import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { GameCardComponent } from '../../components/cards/game-card/game-card.component';
import { GameListService } from '../../shared/services/gameList/game-list.service';
import { ErrorMessage } from '../../interfaces/error-message';
import { GameList } from '../../interfaces/game-list';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, GameCardComponent],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent implements OnInit {
  protected totalDocs!: number;
  protected totalPages!: number;
  protected activeResults!: boolean;

  constructor(private gameListService: GameListService) {
    this.activeResults = false;
  }

  ngOnInit(): void {
    this.gameListService.getGameList().subscribe(
      (res: GameList) => {
        this.totalDocs = res.gameList.totalDocs;
        this.totalPages = res.gameList.totalPages;
      },
      (err: ErrorMessage) => {
        console.log(err.error.message);
      }
    );
  }

  protected showResults(img: HTMLImageElement, data: HTMLDivElement) {
    if (!this.activeResults) {
      img.style.rotate = 'none';

      data.style.height = '59px';
      data.style.opacity = '1';

      this.activeResults = true;
    } else {
      img.style.rotate = '-90deg';

      data.style.height = '0';
      data.style.opacity = '0';

      this.activeResults = false;
    }
  }
}
