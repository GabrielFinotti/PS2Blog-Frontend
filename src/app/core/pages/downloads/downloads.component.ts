import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CardGameComponent } from '../../components/cards/card-game/card-game.component';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent,
    CardGameComponent,
  ],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.scss',
})
export class DownloadsComponent {
  // Variáveis do componente
  protected searchGame!: FormGroup;
  public inputFocus!: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.searchGame = formBuilder.group({
      game: [''],
    });

    this.inputFocus = false;
  }

  protected getGame() {}

  // Métodos de aplicação da borda quando o input estiver focado.
  protected onFocus() {
    this.inputFocus = true;
  }

  protected onBlur() {
    this.inputFocus = false;
  }
}
