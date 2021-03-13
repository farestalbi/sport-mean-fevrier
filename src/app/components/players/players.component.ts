import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any;
  constructor(
    private router: Router,
    private PlayerService: PlayerService) { }

  ngOnInit() {
    this.PlayerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data.allPlayers;
      }
    );
  }
  
  goToPlayer(id) {
    this.router.navigate([`displayPlayer/${id}`]);
  }

  deletePlayer(id) {
    this.PlayerService.deletePlayer(id).subscribe(
      (dataDelete) => {
        console.log('Player deleted Scuccessfully', dataDelete);
        this.PlayerService.getAllPlayers().subscribe(
          (data) => {
            this.players = data.allPlayers;
          }
        )
      }
    )

  }

  goToEditPlayer(id) {
    this.router.navigate([`editPlayer/${id}`]);
  }
}
