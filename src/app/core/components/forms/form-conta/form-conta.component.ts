import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-conta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-conta.component.html',
  styleUrl: './form-conta.component.scss',
})
export class FormContaComponent {
  // Variáveis do componente
  protected formProfile!: FormGroup;
  protected formEditor!: boolean;

  constructor(private formBuilder: FormBuilder) {
    // Criando o formulário do perfil
    this.formProfile = formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    // Inicializando o editor como false
    this.formEditor = false;
  }
  // Função para ativar o editor
  protected activeEditor() {
    if (this.formEditor) {
      this.formEditor = false;
    } else {
      this.formEditor = true;
    }
  }
}
