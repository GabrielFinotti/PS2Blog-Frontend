import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  // Variáveis do componente
  protected activeNav!: boolean;

  // Iniciando a abertura da navbar como falsa
  constructor() {
    this.activeNav = false;
  }

  // Função de ativação da abertura da navbar.
  protected onShowNav(event: HTMLElement) {
    if (!this.activeNav) {
      this.activeNav = true;
      event.style.top = '0';
      event.style.width = '55%';
    } else {
      this.activeNav = false;
      event.style.top = '-1';
      event.style.width = '0';
    }
  }
}
