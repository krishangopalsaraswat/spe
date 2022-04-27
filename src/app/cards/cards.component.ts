import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMedicineService } from '../service/add-medicine.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

// ****object to recieve data from backend*****
  medicine:any;
  medname:any;
  constructor(private service:AddMedicineService
    ,private router:Router) { }

 
  ngOnInit(): void {
    // ****************subscribe function to load data from backend************
    this.service.getallmedicines().subscribe((data)=>this.medicine=data);
  }

     

  request(mname,tcount,useremail){
    // sessionStorage.setItem('medicinename', this.medicine.medicineName);
    this.medname=mname;
    console.log(useremail)

    this.router.navigate(['request',mname,tcount,useremail])
  }

}
