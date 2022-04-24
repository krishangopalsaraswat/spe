import { Component, OnInit } from '@angular/core';
import { medicineDetails } from '../medicineDetails';
import { AddMedicineService } from '../service/add-medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicinedetails: medicineDetails=new medicineDetails();
  
  constructor(private service:AddMedicineService, 
    private router:Router) { }

  ngOnInit(): void {
    
  }

// ***************event handler to add medicine details***************

  public registerMedicine(){
    
      this.service.doaddmedicine(this.medicinedetails).subscribe(
        res=>
          (console.log("ok"))
      )
      this.router.navigate(['home'])

  }

  // ********event handler for drop drown (medicine domain)*********** 
  selectChangeHandler(event:any){
    this.medicinedetails.medicineDomain=event.target.value
    }


 

}
