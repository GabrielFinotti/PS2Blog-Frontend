import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  protected isToggle!: boolean;
  protected username!: string | undefined;

  constructor() {
    this.isToggle = false;
    this.username = undefined;
  }

  ngOnInit(): void {
    this.setUsername();
  }

  protected onClick() {
    if (window.screenX >= 1020) return;

    this.isToggle = !this.isToggle;
  }

  private setUsername() {
    const username = sessionStorage.getItem('username');

    if (!username) return;

    this.username = username;
  }
}
