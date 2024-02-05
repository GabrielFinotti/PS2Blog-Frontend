import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  protected id!: string;

  constructor() {}

  ngOnInit(): void {
    this.getuserId();
  }

  private getuserId() {
    if (typeof window !== 'undefined') {
      const sessionId = sessionStorage.getItem('id');
      const localId = localStorage.getItem('id');

      if (sessionId !== null) {
        this.id = sessionId;
      }
      if (localId !== null) {
        this.id = localId;
      }
    }
  }

  protected showNav(navbar: HTMLElement) {
    navbar.style.width = '55%';
    navbar.style.opacity = '1';
  }

  protected closeNav(navbar: HTMLElement) {
    navbar.style.width = '0';
    navbar.style.opacity = '0';
  }
}
