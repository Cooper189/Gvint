import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { LoginInGuard, LoginGuard } from './helpers/guards/login-in.guard';

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'game', component: GameFieldComponent, canActivate: [LoginInGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
