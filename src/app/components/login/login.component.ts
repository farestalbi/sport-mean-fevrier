import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {};
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,
    private userService:UserService,
    private router:Router,) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['', [Validators.email, Validators.required]],
      pwd:['', [Validators.minLength(8), Validators.required]],
    })
    
  }

  login(x){
    console.log('login is done', x)
    this.userService.login(x).subscribe(
      ()=>{
        this.router.navigate(['']);
      }
    )}
}
