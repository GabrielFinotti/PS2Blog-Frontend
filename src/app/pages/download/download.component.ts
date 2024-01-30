import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {}
