import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { UserUpdate } from '../../../interfaces/user/user-update';
import { UserDataService } from '../../../services/userServices/data/user-data.service';
import { UserUpdateService } from '../../../services/userServices/update/user-update.service';

@Component({
  selector: 'app-user-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.scss',
})
export class UserProfileFormComponent implements OnInit {
  @ViewChild('form') private form!: ElementRef<HTMLFormElement>;

  protected updateProfile!: FormGroup;
  protected userData!: UserUpdate;
  protected isShowForm!: boolean;
  protected isEditProfile!: boolean;
  protected isInvalid!: Record<string, boolean>;
  private token!: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private userDataService: UserDataService,
    private userUpdateService: UserUpdateService
  ) {
    this.updateProfile = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      bio: ['', [Validators.required, Validators.maxLength(500)]],
    });

    this.token = sessionStorage.getItem('token');
    this.isEditProfile = false;
    this.isShowForm = false;
    this.isInvalid = {};
  }

  ngOnInit(): void {
    setInterval(() => {
      this.isShowForm = true;
    }, 1);

    setInterval(() => {
      this.render.setStyle(this.form.nativeElement, 'height', 'auto');
      this.render.setStyle(this.form.nativeElement, 'min-height', '243px');
      this.render.removeClass(this.form.nativeElement, 'show-form');
    }, 550);

    if (this.token) {
      this.userDataService.userData(this.token).subscribe((res) => {
        this.userData = res;
      });
    }

    this.updateProfile.valueChanges.subscribe();
  }

  protected editProfile() {
    this.isEditProfile = !this.isEditProfile;

    if (this.isEditProfile) {
      const controls = this.updateProfile.controls;

      Object.keys(controls).forEach((controlName) => {
        let valueToSet;

        switch (controlName) {
          case 'username':
            valueToSet = this.userData.username;
            break;

          case 'email':
            valueToSet = this.userData.email;
            break;

          default:
            valueToSet = this.userData.bio as string;
        }

        controls[controlName].setValue(valueToSet);
      });
    }
  }

  protected submitProfile() {
    if (this.updateProfile.invalid) return;

    const { username, email, bio }: UserUpdate = this.updateProfile.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (username != username.trim()) {
      this.isInvalid['username'] = true;
      return;
    } else {
      this.isInvalid['username'] = false;
    }
    if (bio != bio?.trim()) {
      this.isInvalid['bio'] = true;
      return;
    } else {
      this.isInvalid['bio'] = false;
    }
    if (!emailRegex.test(email)) {
      this.isInvalid['email'] = true;
      return;
    } else {
      this.isInvalid['email'] = false;
    }

    const data: UserUpdate = {
      username,
      email,
      bio,
    };

    if (this.token) {
      this.userUpdateService.userUpdate(data, this.token).subscribe(
        (res) => {
          console.log(res.message);
        },
        (err) => console.log(err)
      );
    }

    this.isEditProfile = false;
  }

  protected invalidInput(controlName: string) {
    const control = this.updateProfile.get(controlName);

    if (!control) return false;

    return control.invalid && control.dirty;
  }
}
