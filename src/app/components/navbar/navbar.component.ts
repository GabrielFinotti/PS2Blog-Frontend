import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected isShowNav!: boolean;

  constructor() {
    this.isShowNav = false;
  }

  public showNav() {
    this.isShowNav = !this.isShowNav;
  }
}
