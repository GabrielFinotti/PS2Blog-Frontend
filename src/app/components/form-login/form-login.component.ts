import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  protected login!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      saveUser: [''],
    });
  }

  protected getUser() {}
}
