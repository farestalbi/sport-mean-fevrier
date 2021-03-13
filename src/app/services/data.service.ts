import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  players =  [
    {id: '1', name: 'Messi', poste:'Attaquant', n: '10', age: '33', description:'##'},
    {id: '2', name: 'Ronaldo', poste:'Attaquant', n: '7', age: '36', description:'##'},
    {id: '3', name: 'Dembélé', poste:'Attaquant', n: '11', age: '23', description:'##'},
    {id: '4', name: 'Dybala', poste:'Attaquant', n: '10', age: '28', description:'##'},
   ];

   let matches= [
     {}
   ];
   return {players, matches};

  }
}