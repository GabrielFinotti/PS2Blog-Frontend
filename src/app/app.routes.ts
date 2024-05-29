import { AcountComponent } from './pages/acount/acount.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccessComponent } from './pages/access/access.component';

export const routes: Routes = [
  { path: 'access', component: AccessComponent },
  { path: 'acount/user:id', component: AcountComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
