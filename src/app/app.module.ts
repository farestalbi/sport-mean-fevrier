import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatcheComponent } from './matche/matche.component';
import { ResultComponent } from './result/result.component';
import { PlayersNavComponent } from './players-nav/players-nav.component';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { DipslayMatchComponent } from './dipslay-match/dipslay-match.component';
import { DisplayTeamComponent } from './display-team/display-team.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditPlayersComponent } from './edit-players/edit-players.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    TeamsComponent,
    PlayersComponent,
    MatchesComponent,
    AddTeamComponent,
    AddMatchComponent,
    AddPlayerComponent,
    MatcheComponent,
    ResultComponent,
    PlayersNavComponent,
    DisplayPlayerComponent,
    DipslayMatchComponent,
    DisplayTeamComponent,
    EditPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
