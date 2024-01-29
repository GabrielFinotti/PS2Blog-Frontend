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
import { UserFormService } from '../../shared/services/user-form.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @ViewChildren('input') private input!: QueryList<ElementRef>;
  @ViewChildren('label') private label!: QueryList<ElementRef>;
  protected loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private userFormService: UserFormService
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
          console.log(res);
        },
        (err) => {
          console.log(err.error);
        }
      );
    } else {
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
