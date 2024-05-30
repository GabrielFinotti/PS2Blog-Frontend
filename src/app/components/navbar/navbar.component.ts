import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected isToggle!: boolean;

  constructor() {
    this.isToggle = false;
  }

  protected onClick() {
    this.isToggle = !this.isToggle;
  }
}
