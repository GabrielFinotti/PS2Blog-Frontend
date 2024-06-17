import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { GamesList } from '../../../interfaces/response/games-list';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent implements OnInit {
  @Input() public list!: GamesList;

  constructor(private render: Renderer2) {}

  ngOnInit(): void {}
}
