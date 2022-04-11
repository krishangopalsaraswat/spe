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

  public getbymedicinename(mname){
    return this.http.get("http://localhost:8081/searchMedicineDetails/"+mname);
  }

  // public getUserByEmail(email){
  //   return this.http.get("http://localhost:9090//findUser/"+email);
  // }
  // public doRegistration(user){
  //   return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  // }

  public getallmedicines(){
    return this.http.get("http://localhost:8081/medicine");
  }
}
