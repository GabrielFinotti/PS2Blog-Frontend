import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUserService } from '../../shared/services/form-user.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  // Enviando um evento para ser recebido pelos cards de informações
  @Output() private info = new EventEmitter();

  protected login!: FormGroup;
  protected cardInfo!: string;

  constructor(
    private formBuilder: FormBuilder,
    private formUserService: FormUserService
  ) {
    // Gerando o formulário de login e suas validações
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      saveUser: [''],
    });
  }
  // Método para buscar o usuário
  protected getUser() {
    if (this.login.valid) {
      console.log(this.login.value);
    }
  }
}
