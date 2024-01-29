import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public formToggle!: boolean;

  ngOnInit(): void {
    this.formToggle = true;
  }

  public toggleForm() {
    if (this.formToggle) {
      this.formToggle = false;
    } else {
      this.formToggle = true;
    }
  }
}
