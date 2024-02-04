import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { GameCardComponent } from '../../components/cards/game-card/game-card.component';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, GameCardComponent],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {}
