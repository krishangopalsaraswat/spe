import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private http:HttpClient) { }

  public doaddmedicine(medicinedetails){
    return this.http.post("http://localhost:8081/addMedicineDetails",medicinedetails);
  }

  // public doRegistration(user){
  //   return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  // }
}
