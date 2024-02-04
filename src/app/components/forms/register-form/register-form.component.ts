import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessage } from '../../../interfaces/error-message';
import { UserFormService } from '../../../shared/services/user-form.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  @ViewChildren('input') private input!: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @ViewChildren('label') private label!: QueryList<
    ElementRef<HTMLLabelElement>
  >;
  @Output() private infoMessage = new EventEmitter<string>();
  protected registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private userFormService: UserFormService
  ) {
    this.registerForm = this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      passwordConf: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
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
          this.infoMessage.emit(res.message);
        },
        (err: ErrorMessage) => {
          this.infoMessage.emit(err.error.message);
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
