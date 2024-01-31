import { Component, OnInit } from '@angular/core';
import { UserDataService } from './../../shared/services/user-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { UpdateFormComponent } from '../../components/update-form/update-form.component';
import { UserNameResponse } from '../../interfaces/user-name-response';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, UpdateFormComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  protected userName!: UserNameResponse;
  private userId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userDataService.getUserName(this.userId).subscribe(
      (res) => {
        this.userName = res;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
