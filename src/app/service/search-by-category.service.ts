import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchByCategoryService {

  constructor(private http:HttpClient) { }
  public getMedicineByCategory(medcineCategory){
    console.log("ang-service");
    return this.http.get("http://localhost:8084/searchMedicineDetailsDomain/"+medcineCategory);
  }
}
