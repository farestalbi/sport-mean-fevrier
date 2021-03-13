import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  player : any;
  constructor() { }

  ngOnInit() {
    this.player=[
      {id: '1', name: 'Messi', poste:'Attaquant', n: '10', age: '33', description:'##'},
      {id: '2', name: 'Ronaldo', poste:'Attaquant', n: '7', age: '36', description:'##'},
      {id: '3', name: 'Dembélé', poste:'Attaquant', n: '11', age: '23', description:'##'},
      {id: '4', name: 'Dybala', poste:'Attaquant', n: '10', age: '28', description:'##'},
    ]
  }

}
