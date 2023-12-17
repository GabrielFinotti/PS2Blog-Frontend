import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { FormLoginComponent } from '../../components/Forms/form-login/form-login.component';
import { FormCadastroComponent } from '../../components/Forms/form-cadastro/form-cadastro.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormLoginComponent,
    FormCadastroComponent,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // Variáveis do componente
  public toggleForm!: boolean;

  // Começando com o formulário de login ativo.
  constructor() {
    this.toggleForm = true;
  }

  // Função para troca de formulários.
  public onToggleForm() {
    if (this.toggleForm) {
      this.toggleForm = false;
    } else {
      this.toggleForm = true;
    }
  }
}
