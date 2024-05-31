import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShowPassword } from '../../../enums/show-password';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.scss',
})
export class UserProfileFormComponent implements OnInit {
  @ViewChild('input') private input!: ElementRef<HTMLInputElement>;

  protected ShowPassUrl!: string;
  protected isShowForm!: boolean;
  protected isEditProfile!: boolean;
  protected updateProfile!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.updateProfile = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.ShowPassUrl = ShowPassword.show;
    this.isEditProfile = false;
    this.isShowForm = false;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.isShowForm = true;
    }, 1);
  }

  protected showPass() {
    if (this.ShowPassUrl === ShowPassword.show) {
      this.ShowPassUrl = ShowPassword.hidden;
      this.input.nativeElement.type = 'text';
    } else {
      this.ShowPassUrl = ShowPassword.show;
      this.input.nativeElement.type = 'password';
    }
  }

  protected editProfile() {
    this.isEditProfile = !this.isEditProfile;

    this.updateProfile.reset('');
  }

  protected submitProfile() {
    this.isEditProfile = false;
  }
}
