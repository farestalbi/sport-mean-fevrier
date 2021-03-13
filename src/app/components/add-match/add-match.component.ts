import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match : any={};
  matchForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.matchForm = this.fb.group({
      score1 : [''],
      score2 : [''],
      team1 : [''],
      team2 : [''],
      logo1 : [''],
      logo2 : [''],
    })
  }
addMatch(){
  console.log('Here the match object',this.match);
}
}
