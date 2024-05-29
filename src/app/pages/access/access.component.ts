import { Component } from '@angular/core';

//Components
import { LoginFormComponent } from '../../components/forms/login-form/login-form.component';
import { RegisterFormComponent } from '../../components/forms/register-form/register-form.component';

//Enums
import { IsFormLogin } from '../../enums/is-form-login';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [LoginFormComponent, RegisterFormComponent],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss',
})
export class AccessComponent {
  protected isFormLogin!: boolean;
  protected typeForm!: string;
  protected spanForm!: string;

  constructor() {
    this.isFormLogin = true;
    this.typeForm = IsFormLogin.isRegister;
    this.spanForm = IsFormLogin.spanRegister;
  }

  protected toggleForm() {
    this.isFormLogin = !this.isFormLogin;

    if (this.isFormLogin) {
      this.typeForm = IsFormLogin.isRegister;
      this.spanForm = IsFormLogin.spanRegister;
    } else {
      this.typeForm = IsFormLogin.isLogin;
      this.spanForm = IsFormLogin.spanLogin;
    }
  }
}
