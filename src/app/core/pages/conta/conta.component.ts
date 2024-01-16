import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CardPerfilComponent } from '../../components/cards/card-perfil/card-perfil.component';
import { FormContaComponent } from '../../components/forms/form-conta/form-conta.component';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    FooterComponent,
    CardPerfilComponent,
    FormContaComponent,
  ],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.scss',
})
export class ContaComponent {}
