import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GamesCardsComponent } from '../../components/cards/games-cards/games-cards.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NavbarComponent, FooterComponent, GamesCardsComponent],
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
