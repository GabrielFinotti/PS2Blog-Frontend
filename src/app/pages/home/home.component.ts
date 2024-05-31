import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

//Components
import { GamesCardsComponent } from '../../components/cards/games-cards/games-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, GamesCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected isShowSearch!: boolean;

  constructor() {
    this.isShowSearch = false;
  }

  protected showSearch() {
    this.isShowSearch = !this.isShowSearch;
  }
}
