import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccessComponent } from './pages/access/access.component';
import { AccountComponent } from './pages/account/account.component';
import { UserProfileFormComponent } from './components/forms/user-profile-form/user-profile-form.component';
import { UserGamerCardsComponent } from './components/cards/user-gamer-cards/user-gamer-cards.component';
import { fullAccessGuard } from './guards/full-access.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [fullAccessGuard],
  },
  {
    path: 'access',
    component: AccessComponent,
  },
  {
    path: 'account/user/:id',
    component: AccountComponent,
    children: [
      { path: 'profile', component: UserProfileFormComponent },
      { path: 'favorite', component: UserGamerCardsComponent },
    ],
    canActivate: [fullAccessGuard],
  },
  { path: '**', redirectTo: '' },
];
