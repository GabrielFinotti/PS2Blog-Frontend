import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ErrorMessage } from '../../../interfaces/error-message';
import { ResponseMessage } from '../../../interfaces/response-message';
import { UserFormService } from '../../../shared/services/user/user-form.service';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.scss',
})
export class UpdateFormComponent {
  @Output() private infoMessage = new EventEmitter<string>();
  private userId!: string;
  protected updateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userFormService: UserFormService,
    private activatedRoute: ActivatedRoute
  ) {
    this.updateForm = this.formBuilder.group({
      userName: ['', [Validators.minLength(4), Validators.maxLength(16)]],
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  protected updateUser() {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
    });

    const userData = this.updateForm;

    if (userData.valid) {
      this.userFormService.userUpdate(userData, this.userId).subscribe(
        (res: ResponseMessage) => {
          this.infoMessage.emit(res.message);
        },
        (err: ErrorMessage) => {
          this.infoMessage.emit(err.error.message);
        }
      );
    }
  }
}
