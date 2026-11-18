import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// O layout permanece na tela. Somente o conteúdo do router-outlet é trocado.
const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule), data: { titulo: 'Início' } },
  { path: 'match', loadChildren: () => import('./pages/match/match.module').then(m => m.MatchModule), data: { titulo: 'Match' } },
  { path: 'login', loadChildren: () => import('./pages/auth/auth-module').then(m => m.AuthModule), data: { titulo: 'Acesso' } },
  { path: '**', redirectTo: 'inicio' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
