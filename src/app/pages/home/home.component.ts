import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

//Components
import { GameCardComponent } from '../../components/cards/game-card/game-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, GameCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected isShow!: boolean;

  constructor() {
    this.isShow = false;
  }

  public searchFocus() {
    this.isShow = true;
  }

  public searchBlur() {
    this.isShow = false;
  }
}
