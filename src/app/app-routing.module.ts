import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { LoginInGuard, LoginGuard } from './helpers/guards/login-in.guard';
import { CardSelectorComponent } from './card-selector/card-selector.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'card-selector', component: CardSelectorComponent},
  { path: 'game', loadChildren: () => import('./game/game.module').then(mod => mod.GameModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
