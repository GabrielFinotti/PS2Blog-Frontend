import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // Variáveis do componente
  protected activeNav!: boolean
  protected showNav!: string;
  protected closeNav!: string;

  constructor() {
    this.activeNav = false
  }

  protected onShowNav() {
    if(this.activeNav) {
      this.activeNav = false
    } else {
      this.activeNav = true
    }
  }

}
