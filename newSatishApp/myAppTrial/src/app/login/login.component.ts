import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName1 : string ="";
  password1 : string = "";
  creadential = [
    {username:"sss", password:"111"}];
  constructor(public router:Router) { }

  ngOnInit() {
  }

clickMessage:string = '';

onClickLogin() {
  if( (this.userName1 === this.creadential[0].username) && (this.password1 === this.creadential[0].password))
  {
    this.router.navigate(['/registration']);
  }
  else
  {
    alert("Not Authenticated");
  }
  this.userName1 = "";
  this.password1 = "";
    
  }
   

}
