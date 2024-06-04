import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
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
import { UserLogin } from '../../../interfaces/user/user-login';
import { UserAuthService } from '../../../services/userServices/auth/user-auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  @ViewChildren('input') private inputs!: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @ViewChildren('label') private labels!: QueryList<
    ElementRef<HTMLLabelElement>
  >;

  protected showPassUrl!: string;
  protected loginForm!: FormGroup;
  protected isInvalid!: Record<string, boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private userAuthService: UserAuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });

    this.showPassUrl = ShowPassword.show;
    this.isInvalid = {};
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe();
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

  protected submitForm() {
    if (this.loginForm.invalid) return;

    const { email, password }: UserLogin = this.loginForm.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      this.isInvalid['email'] = true;
      return;
    } else {
      this.isInvalid['email'] = false;
    }

    if (password != password.trim()) {
      this.isInvalid['password'] = true;
      return;
    } else {
      this.isInvalid['password'] = false;
    }

    const data: UserLogin = {
      email,
      password,
    };

    this.userAuthService.userLogin(data).subscribe(
      (res) => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('user', res.username);
      },
      (err) => console.log(err)
    );
  }

  protected invalidInput(controlName: string) {
    const control = this.loginForm.get(controlName);

    if (!control) return false;

    return control.invalid && control.dirty && control.touched;
  }
}
