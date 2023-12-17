import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CardPostComponent } from '../../components/cards/card-post/card-post.component';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent, CardPostComponent],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.scss',
})
export class PostagemComponent {}
