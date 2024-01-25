import { Component, OnInit } from '@angular/core';
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
export class FormContaComponent implements OnInit {
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
  }
  // Função de inicialização
  ngOnInit(): void {
    // Inicializando o editor como falso e o formulário como desativado
    this.formEditor = false;
    this.formProfile.disable();
  }
  // Função para ativar o editor
  protected activeEditor() {
    if (this.formEditor) {
      this.formEditor = false;
      this.formProfile.disable();
    } else {
      this.formEditor = true;
      this.formProfile.enable();
    }
  }
}
