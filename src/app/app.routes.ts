import { Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { PostagemComponent } from './core/pages/postagem/postagem.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'postagem', component: PostagemComponent },
];
