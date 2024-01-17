import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGamesService } from '../../../../shared/services/list-games.service';

@Component({
  selector: 'app-card-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.scss',
})
export class CardGameComponent implements OnInit {
  // Variáveis do componente
  protected viewCard!: boolean;

  constructor(private listGamesService: ListGamesService) {
    this.viewCard = true;
  }

  ngOnInit(): void {}
}
