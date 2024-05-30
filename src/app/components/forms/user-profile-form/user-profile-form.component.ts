import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShowPassword } from '../../../enums/show-password';

@Component({
  selector: 'app-user-profile-form',
  standalone: true,
  imports: [],
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.scss',
})
export class UserProfileFormComponent {
  @ViewChild('input') private input!: ElementRef<HTMLInputElement>;

  protected ShowPassUrl!: string;

  constructor() {
    this.ShowPassUrl = ShowPassword.show;
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
}
