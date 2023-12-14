import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { FormCadastroComponent } from '../../components/form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormLoginComponent, FormCadastroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
