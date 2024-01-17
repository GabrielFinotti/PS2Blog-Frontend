import { Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './core/pages/login/login.component';
import { DownloadsComponent } from './core/pages/downloads/downloads.component';
import { ContaComponent } from './core/pages/conta/conta.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'conta', component: ContaComponent },
  { path: '**', component: NotFoundComponent },
];
