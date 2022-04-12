import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../service/authentication-service.service';

export class user{
  username:any;
  password:any;
}

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

 users: user=new user;
  auth:any;
  constructor(private service:AuthenticationServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  public getlogin(){
    this.service.dologin(this.users).subscribe(
(response)=>this.auth=response
    )

  }

  public createuser(){
    this.service.dosignup(this.users).subscribe(
      (response)=>console.log("regristraion done")
          )
    this.router.navigate(['home'])
  }
  
}
