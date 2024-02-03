import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataResponse } from '../../interfaces/user-data-response';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-user-data-form',
  standalone: true,
  imports: [],
  templateUrl: './user-data-form.component.html',
  styleUrl: './user-data-form.component.scss',
})
export class UserDataFormComponent implements OnInit {
  private userId!: string;
  protected userData!: UserDataResponse;

  constructor(
    private userDataService: UserDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userDataService.getUserName(this.userId).subscribe((res) => {
      this.userData = res;
    });
  }
}
