import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/forms/login-form/login-form.component';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss',
})
export class AccessComponent {}
