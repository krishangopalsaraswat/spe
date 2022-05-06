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

    useremail:any;
    added:any;
  ngOnInit(): void {
    this.useremail=sessionStorage.getItem('authenticatedUser');
    this.added=false;
  }

// ***************event handler to add medicine details***************

  public registerMedicine(){
    this.medicinedetails.userEmail=this.useremail
      this.service.doaddmedicine(this.medicinedetails).subscribe(
        res=>
          {console.log("ok"),this.added=true;}
      )
      // this.router.navigate(['home'])
//       window.location.href='home'

  }

  // ********event handler for drop drown (medicine domain)*********** 
  selectChangeHandler(event:any){
    this.medicinedetails.medicineDomain=event.target.value
    }

// ***************SHow eamil************

redirect(){
  this.router.navigate(['home'])

}

}
