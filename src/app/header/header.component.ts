import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicineResponse } from '../medicineResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  medicineresponse:medicineResponse=new medicineResponse();

  constructor(private router:Router) { }

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
  public getMedicine(){
    console.log(this.searchMedicine)
  }
  
}
