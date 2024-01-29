import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserFormService } from '../../shared/services/user-form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.scss',
})
export class UpdateFormComponent implements OnInit {
  protected updateForm!: FormGroup;
  private userId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private userFormService: UserFormService,
    private activatedRoute: ActivatedRoute
  ) {
    this.updateForm = this.formBuilder.group({
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
    });
  }

  ngOnInit(): void {}

  protected updateUser() {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
    });

    const userData = this.updateForm;

    if (userData.valid) {
      this.userFormService.userUpdate(userData, this.userId).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.error);
        }
      );
    }
  }
}
