import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowDonationsService {

  constructor(private http: HttpClient) { }

  public getDonations(mob){
    console.log("ang-service");
    return this.http.get("http://localhost:8081/getDonations/"+mob);
  }
}

// public getbymedicinename(mname){
//   return this.http.get("http://localhost:8081/searchMedicineDetails/"+mname);
// }
