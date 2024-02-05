import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../../components/forms/login-form/login-form.component';
import { RegisterFormComponent } from '../../components/forms/register-form/register-form.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    InfoCardComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public formToggle!: boolean;
  protected infoMessage!: string;

  constructor(private router: Router) {
    this.formToggle = true;
  }

  ngOnInit(): void {
    this.verifySave();
  }

  private verifySave() {
    if (typeof window !== 'undefined') {
      if (
        sessionStorage.getItem('id') !== null ||
        localStorage.getItem('id') !== null
      ) {
        this.router.navigateByUrl('downloads');
      }
    }
  }

  public toggleForm() {
    if (this.formToggle) {
      this.formToggle = false;
    } else {
      this.formToggle = true;
    }
  }

  protected getInfoMessage(message: string) {
    this.infoMessage = message;

    setTimeout(() => {
      this.infoMessage = '';
    }, 3500);
  }
}
