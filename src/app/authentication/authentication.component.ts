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
  signinDisable=true;
  signupDisable=true;
  constructor(public service:AuthenticationServiceService,
    private router:Router,
   ) { }

  ngOnInit(): void {
  }

  public getlogin(){
    this.service.dologin(this.users).subscribe(
(response)=>{this.valid(response),console.log(this.signinDisable)}
    )

  }
// *********
// Credentials = {
//   username: "",
//   password: "",
// }
invalidLogin = true;

  valid(response){
    console.log(response[0])
    if(this.users.username===response[0].username && this.users.password===response[0].password){
      sessionStorage.setItem('authenticatedUser', this.users.username);
      // sessionStorage.setItem('a')
      // this.router.navigate(['welcome', this.users.username]);
      this.invalidLogin = false;
      this.router.navigate(['home'])
    }
    else {
      this.invalidLogin = true;
    }
  }

  
  public createuser(){
    this.service.dosignup(this.users).subscribe(
      (response)=>console.log("regristraion done")
          ),
          (sessionStorage.setItem('authenticatedUser', this.users.username)),
    (this.router.navigate(['home']))  
  }

  
  
}
