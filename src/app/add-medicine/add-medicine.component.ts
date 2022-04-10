import { Component, OnInit } from '@angular/core';
import { medicineDetails } from '../medicineDetails';
import { medicineResponse } from '../medicineResponse';
import { AddMedicineService } from '../service/add-medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicinedetails: medicineDetails=new medicineDetails();
  medicineresponse: medicineResponse=new medicineResponse();
  
  
  
  constructor(private service:AddMedicineService) { }

  ngOnInit(): void {
  }


  public registerMedicine(){
      this.service.doaddmedicine(this.medicinedetails).subscribe(
        response=>
          (this.display(response))
      )
  }

  public display(response){
    this.medicineresponse.medicineName=response.medicineName,
    this.medicineresponse.tabletCount=response.tabletCount,
    this.medicineresponse.expiryDate=response.expiryDate,
    this.medicineresponse.details=response.details,
    this.medicineresponse=response.medicineDomain,
    console.log(response)
  }
  

  // public registerNow(){
  //   let resp=this.service.doRegistration(this.user);
  //   resp.subscribe((data)=>this.message=data);
  //     }

}
