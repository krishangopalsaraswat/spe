import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicineResponse } from '../medicineResponse';
import { AddMedicineService } from '../service/add-medicine.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  medicineresponse:medicineResponse=new medicineResponse();

  constructor(private router:Router,
    private service:AddMedicineService) { }

  ngOnInit(): void {
    
  }
  showFiller = false;

  // **********rounting to add medicine page**********
  public donateMedicine(){
    this.router.navigate(['donateMedicine']),
    console.log("clicked")
  }

  // ********routing to cards page***********
  public home(){
    this.router.navigate(['home']),
    console.log("clicked")
  }

  searchMedicine:any;
  mresponse : any;
  

  public getMedicine(){
    this.service.getmedicinebyName(this.searchMedicine).subscribe(
      (response)=>{(console.log(response)),
        (this.mresponse=response)
      }),
      this.router.navigate(["getMedicine"])
}

public gotoAuthentication(){
  this.router.navigate(['authentication'])
}
}
