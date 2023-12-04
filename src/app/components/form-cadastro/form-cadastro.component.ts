import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Serviços
import { FormUserService } from '../../shared/services/form-user.service';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss',
})
export class FormCadastroComponent {
  // Emissor de evento para o cartão de informação
  @Output() private info = new EventEmitter();

  protected cadastro!: FormGroup;
  protected cardInfo!: string;

  constructor(
    private formBuilder: FormBuilder,
    private formUserService: FormUserService
  ) {
    // Cronstrução do formulário de cadastro
    this.cadastro = this.formBuilder.group({
      user: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
      confPassword: ['', Validators.required],
    });
  }
}
