import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccessComponent } from './pages/access/access.component';
import { AccountComponent } from './pages/account/account.component';
import { PostComponent } from './pages/post/post.component';
import { CommunityComponent } from './pages/community/community.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'access', component: AccessComponent },
  { path: 'account/:player', component: AccountComponent },
  { path: 'post', component: PostComponent },
  { path: 'community', component: CommunityComponent },
  { path: '**', redirectTo: '' },
];
