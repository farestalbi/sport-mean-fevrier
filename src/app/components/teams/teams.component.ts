import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.teams = [
      {id:1, name: 'RMD', foundation: '1899', stadium:'Bernabu', country: 'Spain'},
      {id:2, name: 'FCB', foundation: '1900', stadium:'Camp Nou', country: 'Spain'},
      {id:3, name: 'SEV', foundation: '1920', stadium:'SV STADIUM', country: 'Spain'},
    ]
  }

  goToTeam(id){
    this.router.navigate([`displayTeam/${id}`]);
    }

}
