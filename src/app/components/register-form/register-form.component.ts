import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserFormService } from '../../shared/services/user-form.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  @ViewChildren('input') private input!: QueryList<ElementRef>;
  @ViewChildren('label') private label!: QueryList<ElementRef>;
  protected registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private userFormService: UserFormService
  ) {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConf: ['', [Validators.required]],
    });
  }

  protected sendForm() {
    const userData = this.registerForm;

    if (
      userData.valid &&
      userData.value['password'] === userData.value['passwordConf']
    ) {
      this.userFormService.userRegister(userData).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.error(err.error);
        }
      );
    }
  }

  protected onFocus(index: number) {
    if (this.input.toArray()[index].nativeElement.value.length == 0) {
      this.render.setStyle(
        this.label.toArray()[index].nativeElement,
        'top',
        '-17px'
      );
    }
  }

  protected onBlur(index: number) {
    if (this.input.toArray()[index].nativeElement.value.length == 0) {
      this.render.setStyle(
        this.label.toArray()[index].nativeElement,
        'top',
        '25%'
      );
    }
  }
}
