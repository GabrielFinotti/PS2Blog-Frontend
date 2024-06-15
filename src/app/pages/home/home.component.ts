import { Component } from '@angular/core';
import { GameCardComponent } from '../../components/cards/game-card/game-card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameCardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
