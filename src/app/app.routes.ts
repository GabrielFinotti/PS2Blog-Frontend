import { Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './core/pages/login/login.component';
import { PostagemComponent } from './core/pages/postagem/postagem.component';
import { ComunidadeComponent } from './core/pages/comunidade/comunidade.component';
import { DownloadsComponent } from './core/pages/downloads/downloads.component';
import { MembrosComponent } from './core/pages/membros/membros.component';
import { ContaComponent } from './core/pages/conta/conta.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'postagem', component: PostagemComponent },
  { path: 'comunidade', component: ComunidadeComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'membros', component: MembrosComponent },
  { path: 'conta', component: ContaComponent },
  { path: '**', component: NotFoundComponent },
];
