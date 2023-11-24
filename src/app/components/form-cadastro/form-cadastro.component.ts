import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUserService } from '../../shared/services/form-user.service';
import { Console } from 'console';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss',
})
export class FormCadastroComponent {
  protected cadastro!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formUserService: FormUserService
  ) {
    this.cadastro = formBuilder.group({
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

  protected setUser() {
    if (this.cadastro.valid) {
      this.formUserService
        .setUser(
          this.cadastro.value['user'],
          this.cadastro.value['email'],
          this.cadastro.value['password']
        )
        .subscribe(
          (res) => console.log(res),
          (error) => console.error(`Erro ao cadastrar: ${error}`)
        );
    }
  }
}
