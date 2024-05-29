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
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  @ViewChildren('input') private inputs!: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @ViewChildren('label') private labels!: QueryList<
    ElementRef<HTMLLabelElement>
  >;

  protected showPassUrl!: string;
  protected registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private render: Renderer2) {
    this.registerForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confPassword: ['', Validators.required],
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
      this.inputs.toArray()[2].nativeElement.type = 'text';
    } else {
      this.showPassUrl = ShowPassword.show;
      this.inputs.toArray()[2].nativeElement.type = 'password';
    }
  }
}
