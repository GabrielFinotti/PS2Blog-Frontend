import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserDataService } from '../../services/userServices/data/user-data.service';
import { UserData } from '../../interfaces/user/user-data';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  protected userData!: UserData;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');

    if (!token) return;

    this.userDataService.userData(token).subscribe((res) => {
      this.userData = res;
    });
  }
}
