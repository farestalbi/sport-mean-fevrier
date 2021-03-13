import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matchObj: any;
  constructor() { }

  ngOnInit() {
    this.matchObj = { id: '1', score1: '1', score2: '2', team1: 'RMD', team2: 'FCB', logo1: "assets/images/logo_1.png", logo2: "assets/images/logo_1.png" };

  }

}
