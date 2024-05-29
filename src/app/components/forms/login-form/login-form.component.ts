import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShowPassword } from '../../../enums/show-password';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @ViewChildren('input') private inputs!: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @ViewChildren('label') private labels!: QueryList<
    ElementRef<HTMLLabelElement>
  >;

  protected showPassUrl!: string;
  protected loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private render: Renderer2) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });

    this.showPassUrl = ShowPassword.show;
  }

  protected onFocus(index: number) {
    if (this.inputs.toArray()[index].nativeElement.value.length === 0) {
      this.render.setStyle(
        this.labels.toArray()[index].nativeElement,
        'top',
        '-18px'
      );
    }
  }

  protected onBlur(index: number) {
    if (this.inputs.toArray()[index].nativeElement.value.length === 0) {
      this.render.setStyle(
        this.labels.toArray()[index].nativeElement,
        'top',
        '25%'
      );
    }
  }

  protected isShowPassword() {
    if (this.showPassUrl === ShowPassword.show) {
      this.showPassUrl = ShowPassword.hidden;
      this.inputs.toArray()[1].nativeElement.type = 'text';
    } else {
      this.showPassUrl = ShowPassword.show;
      this.inputs.toArray()[1].nativeElement.type = 'password';
    }
  }
}
