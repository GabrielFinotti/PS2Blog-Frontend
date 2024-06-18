import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

//Components
import { GameCardComponent } from '../../components/cards/game-card/game-card.component';
import { GamesListService } from '../../services/games/games-list.service';
import { GamesList } from '../../interfaces/response/games-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, GameCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  protected search!: FormGroup;
  protected isShow!: boolean;
  protected query!: string;
  protected gameList!: GamesList;
  private token!: string;

  constructor(
    private formBuilder: FormBuilder,
    private gamesListService: GamesListService
  ) {
    this.search = this.formBuilder.group({
      game: '',
    });

    this.isShow = false;
    this.query = '';
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token');

    if (!token) {
      token = sessionStorage.getItem('token');

      if (!token) {
        this.token = '';
        return;
      }
    } else {
      this.token = token;
    }

    this.token = token;

    this.searchGame();
  }

  public searchFocus() {
    this.isShow = true;
  }

  public searchBlur() {
    this.isShow = false;
  }

  public searchGame() {
    let game = this.search.get('game')?.value as string;

    if (!game) game = ' ';

    this.query = `?name=${game}`;

    this.gamesListService
      .getGamesList(this.token, this.query)
      .subscribe((res) => {
        this.gameList = res;
      });
  }
}
