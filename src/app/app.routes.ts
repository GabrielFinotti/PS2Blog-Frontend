import { Routes } from '@angular/router';

//Guards
import { routerAccessGuard } from './guards/router-access.guard';

//Components
import { HomeComponent } from './pages/home/home.component';
import { AccessComponent } from './pages/access/access.component';
import { AccountComponent } from './pages/account/account.component';
import { PostComponent } from './pages/post/post.component';
import { CommunityComponent } from './pages/community/community.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [routerAccessGuard],
  },
  {
    path: 'access',
    component: AccessComponent,
  },
  {
    path: 'account/:player',
    component: AccountComponent,
    canActivate: [routerAccessGuard],
  },
  {
    path: 'post',
    component: PostComponent,
    redirectTo: '',
    canActivate: [routerAccessGuard],
  },
  {
    path: 'community',
    component: CommunityComponent,
    redirectTo: '',
    canActivate: [routerAccessGuard],
  },
  { path: '**', redirectTo: '' },
];
