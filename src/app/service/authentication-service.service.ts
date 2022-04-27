import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }

  public dologin(users){
    return this.http.post("http://localhost:8084/login/",users);
  }

  public dosignup(users){
    return this.http.post("http://localhost:8084/signup/",users);
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return (user === null);
  }
  
  isUserregistered() {
    const registereduser = sessionStorage.getItem('registereduser');
    // console.log(registereduser)
    // return !(registereduser === null);
    return true;
  }


  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
