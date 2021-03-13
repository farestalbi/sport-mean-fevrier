import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matche',
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.css']
})
export class MatcheComponent implements OnInit {
  matches :any;

  constructor() { }
  ngOnInit() {
    this.matches =[
      {id: '1', score1: '1', score2: '2', team1: 'RMD', team2:'FCB', logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png"},
      {id: '2', score1: '3', score2: '1', team1: 'SEV', team2:'RMD',  logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png"},
      {id: '3', score1: '2', score2: '2', team1: 'MUN', team2:'RMD', logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png"},
      {id: '4', score1: '0', score2: '1', team1: 'MUN', team2:'FCB',  logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png"},
    ]
   }
  }


