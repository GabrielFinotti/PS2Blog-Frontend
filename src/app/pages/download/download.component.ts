import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { GameCardComponent } from '../../components/cards/game-card/game-card.component';
import { GameListService } from '../../shared/services/gameList/game-list.service';
import { ErrorMessage } from '../../interfaces/error-message';
import { GameList } from '../../interfaces/game-list';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent,
    GameCardComponent,
  ],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent implements OnInit {
  protected searchGame!: FormGroup;
  protected gameListData!: GameList;
  protected activeResults!: boolean;
  public query!: string;
  public currentPage!: number;
  public visibledPage!: number[]

  constructor(
    private gameListService: GameListService,
    private formBuilder: FormBuilder
  ) {
    this.searchGame = this.formBuilder.group({
      name: [''],
    });

    this.activeResults = false;
    this.currentPage = 1;
    this.visibledPage = [1,2,3,4]
  }

  ngOnInit(): void {
    this.getGameListData();
  }

  protected getGameListData() {
    this.query = `?page=${this.currentPage}&name=${this.searchGame.value['name']}`;

    this.gameListService.getGameList(this.query).subscribe(
      (res: GameList) => {
        this.gameListData = res;
      },
      (err: ErrorMessage) => {
        console.log(err.error.message);
      }
    );
  }

  public nextPage() {
    if (this.currentPage < this.gameListData.gameList.totalPages) {
      this.currentPage++;
      this.query = this.gameListData.gameList.nextPage;
      this.getGameListData();
    }
  }

  public prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.query = this.gameListData.gameList.prevPage;
      this.getGameListData();
    }
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
