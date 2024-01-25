import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent implements OnInit {
  // Variáveis do componente
  public cont!: number;
  public show!: boolean;

  constructor(private router: Router) {
    this.cont = 5;
    this.show = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;

      const interval: NodeJS.Timeout = setInterval(() => {
        this.cont--;

        if (this.cont == 0) {
          clearInterval(interval);

          this.router.navigate(['downloads']);
        }
      }, 1000);
    }, 1500);
  }
}
