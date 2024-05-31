import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {}
