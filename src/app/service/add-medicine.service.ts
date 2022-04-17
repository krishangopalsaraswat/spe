import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private http:HttpClient) { }

  // *******donate medicine********
  public doaddmedicine(medicinedetails){
    return this.http.post("http://localhost:8084/addMedicineDetails",medicinedetails);
  }

  public getbymedicinename(mname){
    return this.http.get("http://localhost:8084/searchMedicineDetails/"+mname);
  }


// ********getting all medicine details to home component********
  public getallmedicines(){
    return this.http.get("http://localhost:8084/medicine");
  }


  // ********fired by search box********
  public getmedicinebyName(searchMedicine){
    return this.http.get("http://localhost:8084/searchMedicineDetails/"+searchMedicine);
  }
}
