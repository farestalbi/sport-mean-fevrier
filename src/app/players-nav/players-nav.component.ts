import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-nav',
  templateUrl: './players-nav.component.html',
  styleUrls: ['./players-nav.component.css']
})
export class PlayersNavComponent implements OnInit {
  @Input() player: any;
  constructor() { }

  ngOnInit() {
   
  }
  }

