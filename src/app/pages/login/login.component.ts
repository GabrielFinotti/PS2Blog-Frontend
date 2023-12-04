import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { FormCadastroComponent } from '../../components/form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    FormLoginComponent,
    FormCadastroComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected cardForm!: boolean;

  constructor() {
    // Iniciando com o formulário de login ativo
    this.cardForm = true;
  }

  // Troca dos formulários de login e cadastro
  protected toggleForm() {
    if (this.cardForm == true) {
      this.cardForm = false;
    } else {
      this.cardForm = true;
    }
  }
}
