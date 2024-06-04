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
import { NgClass } from '@angular/common';
import { ShowPassword } from '../../../enums/show-password';
import { UserRegisterService } from '../../../services/userServices/register/user-register.service';
import { UserRegister } from '../../../interfaces/user/user-register';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent implements OnInit {
  @ViewChildren('input') private inputs!: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @ViewChildren('label') private labels!: QueryList<
    ElementRef<HTMLLabelElement>
  >;
  @ViewChildren('div') private divs!: QueryList<ElementRef<HTMLDivElement>>;

  protected showPassUrl!: string;
  protected registerForm!: FormGroup;
  protected isInvalid!: Record<string, boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private userRegisterService: UserRegisterService
  ) {
    this.registerForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      confPassword: ['', Validators.required],
    });

    this.showPassUrl = ShowPassword.show;
    this.isInvalid = {};
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.divs.forEach((div) => {
        this.render.removeClass(div.nativeElement, 'hidden');
      });
    }, 2200);

    this.registerForm.valueChanges.subscribe();
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

  protected submitForm() {
    if (this.registerForm.invalid) return;

    const { username, email, password }: UserRegister = this.registerForm.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (username != username.trim()) {
      this.isInvalid['emptyUser'] = true;
      return;
    } else {
      this.isInvalid['emptyUser'] = false;
    }
    if (password != password.trim()) {
      this.isInvalid['emptyPass'] = true;
      return;
    } else {
      this.isInvalid['emptyPass'] = false;
    }
    if (password != this.registerForm.get('confPassword')?.value) {
      this.isInvalid['confPassword'] = true;
      return;
    } else {
      this.isInvalid['confPassword'] = false;
    }
    if (!emailRegex.test(email)) {
      this.isInvalid['email'] = true;
      return;
    } else {
      this.isInvalid['email'] = false;
    }

    const data: UserRegister = { username, email, password };

    this.userRegisterService.userRegister(data).subscribe(
      (res) => {
        console.log(res);

        this.registerForm.reset('');
      },
      (err) => console.log(err)
    );
  }

  protected invalidInput(controlName: string) {
    const control = this.registerForm.get(controlName);
    if (!control) return false;

    return control.invalid && control.touched && control.dirty;
  }
}
