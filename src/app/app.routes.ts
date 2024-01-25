import { Routes } from '@angular/router';
import { accessGuard } from './core/guards/access.guard';
import { LoginComponent } from './core/pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
];
