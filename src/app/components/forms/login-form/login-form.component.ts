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
import { ShowPass } from '../../../enums/show-pass';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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
  public isShowPass!: boolean;
  public imgShowPass!: string;

  constructor(private formBuilder: FormBuilder, private render: Renderer2) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false],
    });

    this.isShowPass = false;
    this.imgShowPass = ShowPass.showPass;
  }

  public onFocus(index: number) {
    if (this.inputs.toArray()[index].nativeElement) {
      this.render.setStyle(
        this.labels.toArray()[index].nativeElement,
        'top',
        '-14px'
      );
    }
  }

  public onBlur(index: number) {
    if (this.inputs.toArray()[index].nativeElement.value === '') {
      this.render.setStyle(
        this.labels.toArray()[index].nativeElement,
        'top',
        '30%'
      );
    }
  }

  public showPass() {
    if (!this.isShowPass) {
      this.imgShowPass = ShowPass.notShowPass;
      this.isShowPass = true;
    } else {
      this.imgShowPass = ShowPass.showPass;
      this.isShowPass = false;
    }
  }

  protected submit() {
    if (this.loginForm.invalid) return;

    const email = this.loginForm.get('email')?.value as string;
    const password = this.loginForm.get('password')?.value as string;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email != email.trim() || password != password.trim()) {
      return;
    }
    if (!emailRegex.test(email)) return;

    const data = {
      email,
      password,
    };
  }
}
