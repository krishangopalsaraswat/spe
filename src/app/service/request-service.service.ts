import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http:HttpClient) { }

  public sendemailForRequest(requestDetails){
    return this.http.post<any>("http://localhost:8084/sendMail/",requestDetails);
  }
}
