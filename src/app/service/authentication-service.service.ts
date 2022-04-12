import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }

  public dologin(users){
    return this.http.post("http://localhost:8081/login/",users);
  }

  public dosignup(users){
    return this.http.post("http://localhost:8081/login/",users);
  }
}
