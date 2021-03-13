import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DipslayMatchComponent } from './dipslay-match/dipslay-match.component';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { DisplayTeamComponent } from './display-team/display-team.component';
import { EditPlayersComponent } from './edit-players/edit-players.component';
import { MatcheComponent } from './matche/matche.component';
import { PlayersNavComponent } from './players-nav/players-nav.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminComponent},
  {path:'matche', component:MatcheComponent},
  {path:'players', component:PlayersNavComponent},
  {path:'add-player', component:AddPlayerComponent},
  {path:'add-team', component:AddTeamComponent},
  {path:'add-match', component:AddMatchComponent},
  {path:'displayPlayer/:id', component:DisplayPlayerComponent},
  {path:'displayMatch/:id', component:DipslayMatchComponent},
  {path:'displayTeam/:id', component: DisplayTeamComponent},
  {path:'editPlayers/:id', component: EditPlayersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
