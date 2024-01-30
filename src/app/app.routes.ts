import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DownloadComponent } from './pages/download/download.component';
import { AccountComponent } from './pages/account/account.component';
import { userRouteGuard } from './guards/user-route.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'downloads',
    component: DownloadComponent,
    canActivate: [userRouteGuard],
  },
  {
    path: 'conta/user/:id',
    component: AccountComponent,
    canActivate: [userRouteGuard],
  },
];
