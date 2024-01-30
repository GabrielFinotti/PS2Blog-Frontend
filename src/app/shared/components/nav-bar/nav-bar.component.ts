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
    if (typeof window !== 'undefined') {
      const userId = sessionStorage.getItem('id');
      if (userId !== null) {
        this.id = userId;
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
