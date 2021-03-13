import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 userUrl = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  login(user :any){
    return this.httpClient.post<{message:string}>(`${this.userUrl}/login`, user);
   
  }


  signup(user: any){
   return this.httpClient.post<{message:string}>(`${this.userUrl}/signup`, user);
  }
}
