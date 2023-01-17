import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GameComponent } from './game/game.component';
import { ReportingComponent } from './reporting/reporting.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/auth', pathMatch: 'full'
  },
  {
    path: 'game', component: GameComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'reporting', component: ReportingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
