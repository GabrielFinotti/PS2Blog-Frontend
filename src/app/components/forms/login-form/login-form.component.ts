import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
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
import { Router } from '@angular/router';
import { ErrorMessage } from '../../../interfaces/error-message';
import { UserFormService } from '../../../shared/services/user-form.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @ViewChildren('input') private input!: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @ViewChildren('label') private label!: QueryList<
    ElementRef<HTMLLabelElement>
  >;
  @Output() private infoMessage = new EventEmitter<string>();
  protected loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private userFormService: UserFormService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      userSave: [''],
    });
  }

  protected sendForm() {
    if (this.loginForm.valid) {
      this.userFormService.userLogin(this.loginForm).subscribe(
        (res) => {
          this.infoMessage.emit(res.message);
          this.setUserId(res.user._id);

          if (this.loginForm.value['userSave']) {
            if (typeof window !== 'undefined') {
              localStorage.setItem('id', res.user._id);
            }
          }
        },
        (err: ErrorMessage) => {
          this.infoMessage.emit(err.error.message);
        }
      );
    }
  }

  private setUserId(id: string) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('id', id);

      if (sessionStorage.getItem('id') !== null) {
        this.router.navigateByUrl('downloads');
      }
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
