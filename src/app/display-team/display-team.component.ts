import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
 
  }
  goToTeam(id){
    this.router.navigate([`displayTeam/${id}`])
    }
}
