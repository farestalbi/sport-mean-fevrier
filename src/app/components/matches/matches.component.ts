import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any;
  constructor(private router:Router) { }

  ngOnInit() {
   this.matches = [
     {id: '1', score1: '1', score2: '2', team1: 'RMD', team2:'FCB', logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png"},
     {id: '2', score1: '3', score2: '1', team1: 'SEV', team2:'RMD',  logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png"},
     {id: '3', score1: '2', score2: '2', team1: 'MUN', team2:'RMD', logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png"},
     {id: '4', score1: '0', score2: '1', team1: 'MUN', team2:'FCB',  logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png"},
   ]
  }

  goToMatch(id){
      this.router.navigate([`displayMatch/${id}`])
  }

}
