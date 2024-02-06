import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { GameCardComponent } from '../../components/cards/game-card/game-card.component';
import { GameListService } from '../../shared/services/gameList/game-list.service';
import { GameList } from '../../interfaces/game-list';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GameCardPaginationComponent } from '../../components/pagination/game-card-pagination/game-card-pagination.component';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent,
    GameCardComponent,
    GameCardPaginationComponent,
  ],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent implements OnInit {
  protected searchGame!: FormGroup;
  protected gameListData!: GameList;
  protected activeResults!: boolean;
  protected gameName!: string;
  protected query!: string;

  constructor(
    private gameListService: GameListService,
    private formBuilder: FormBuilder
  ) {
    this.searchGame = this.formBuilder.group({
      name: [''],
    });

    this.activeResults = false;
  }

  ngOnInit(): void {
    this.getGameListData();
  }

  protected getGameListData() {
    this.gameName = this.searchGame.value['name'];

    this.gameListService
      .getGameList(`?name=${this.gameName}`)
      .subscribe((res: GameList) => {
        this.gameListData = res;
      });
  }

  protected sendQuey(query: string) {
    this.query = query;
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
