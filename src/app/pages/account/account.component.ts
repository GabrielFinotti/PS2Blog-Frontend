import { Component, OnInit } from '@angular/core';
import { GetProfile } from '../../interfaces/response/get-profile';
import { GetProfileService } from '../../services/auth/user/get-profile.service';
import { UpdateFormComponent } from '../../components/forms/update-form/update-form.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [UpdateFormComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  protected player!: GetProfile;

  constructor(private getProfileService: GetProfileService) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');

    if (!token) {
      token = sessionStorage.getItem('token');

      if (!token) return;
    }

    this.getProfileService.getProfile(token).subscribe((res) => {
      this.player = res;
    });
  }
}
