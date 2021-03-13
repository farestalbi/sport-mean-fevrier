import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any={};
  playerForm: FormGroup;
  constructor(
    private fb:FormBuilder,
    private playerService:PlayerService,
    private router:Router) { 

  }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name : [''],
      poste : [''],
      n: [''],
      age: [''],
      description: [''],
    })
  }
 addPlayer(){
   this.playerService.addPlayer(this.player).subscribe(
     () =>{
         this.router.navigate(['admin']);
     }
   )
 }
}
