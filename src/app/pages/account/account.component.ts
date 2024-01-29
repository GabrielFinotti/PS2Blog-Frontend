import { Component } from '@angular/core';

import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { UpdateFormComponent } from '../../components/update-form/update-form.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, UpdateFormComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {}
