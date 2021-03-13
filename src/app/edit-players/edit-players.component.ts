import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.css']
})
export class EditPlayersComponent implements OnInit {
  playerForm: any;
  id: any;
  player:any;

  constructor( private fb:FormBuilder,
    private playerService:PlayerService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
this.playerService.getPlayerById(this.id).subscribe(
  (data)=>{
    this.player = data;
  }
)

    this.playerForm = this.fb.group({
      name : [''],
      poste : [''],
      n: [''],
      age: [''],
      description: [''],
    })
  }

   editPlayer(){
    this.playerService.editPlayer(this.player).subscribe(
      () =>{
          this.router.navigate(['admin']);
      }
    )
  }
  }

