import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  // Variáveis do componente
  protected activeNav!: boolean;

  constructor() {
    this.activeNav = false;
  }

  // Função de ativação da navegação.
  protected onShowNav(event: HTMLElement) {
    if (!this.activeNav) {
      this.activeNav = true;
      console.log(event);
      event.style.top = '0';
      event.style.width = '55%';
    } else {
      this.activeNav = false;
      event.style.top = '-1';
      event.style.width = '0';
    }
  }
}
