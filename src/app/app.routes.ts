import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccessComponent } from './pages/access/access.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'access', component: AccessComponent },
  { path: 'account/user/:id', component: AccountComponent },
  { path: '**', redirectTo: '' },
];
