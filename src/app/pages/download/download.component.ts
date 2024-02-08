import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { GameCardComponent } from '../../components/cards/game-card/game-card.component';
import { GameListService } from '../../shared/services/gameList/game-list.service';
import { GameList } from '../../interfaces/game-list';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GameCardPaginationComponent } from '../../components/pagination/game-card-pagination/game-card-pagination.component';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';
@Component({
  selector: 'app-download',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent,
    GameCardComponent,
    GameCardPaginationComponent,
    InfoCardComponent,
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
  protected info!: string;

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

    this.gameListService.getGameList(`?name=${this.gameName}`).subscribe(
      (res: GameList) => {
        this.gameListData = res;
      },
      () => {
        this.sendInfoCard('Não é aceito caracteres especiais na consulta!');
      }
    );
  }

  protected sendQuey(query: string) {
    this.query = query;
  }

  private sendInfoCard(info: string) {
    this.info = info;

    setTimeout(() => {
      this.info = '';
    }, 3500);
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
