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

  protected loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private render: Renderer2) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
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
}
