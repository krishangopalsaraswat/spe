import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationComponent} from '../authentication/authentication.component';
import { AddMedicineService } from '../service/add-medicine.service';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { ShowDonationsService } from '../service/show-donations.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router:Router,
    private service:AddMedicineService,
    public validUser:AuthenticationComponent,
    public dataservice:AuthenticationServiceService,
    public showDownService:ShowDonationsService) { }

  ngOnInit(): void {
    
  }
  showFiller = false;

  // **********rounting to add medicine page**********
  public donateMedicine(){
    this.router.navigate(['donateMedicine']).then(() => {
    window.location.reload();//to auto reload web page when navigating
  });
  }
  userEmail=sessionStorage.getItem('authenticatedUser');
  mobileResponse:any;

  public showDonations(){
    this.showDownService.getDonations(this.userEmail).subscribe(
      response=>(this.mobileResponse=response)
    ),
    this.router.navigate(['showDonations']),
    console.log("showDonations")
    
  }
  // ********routing to cards page***********
  public home(){
    this.router.navigate(['home']),
    console.log("clicked")
  }

  searchMedicine:any;
  mresponse : any;
  

  public getMedicine(){
    // this.service.getmedicinebyName(this.searchMedicine).subscribe(
    //   (response)=>{(console.log(response)),
    //     (this.mresponse=response)
    //   }),
      this.router.navigate(["getMedicine",this.searchMedicine])
}

public gotoAuthentication(){
  this.router.navigate(['authentication'])
}

gotoAuthenticationService(){
  this.dataservice.logout();
  this.router.navigate(['home'])
}

// ****************search by category*****************
selectcategory(){
  window.location.href="getMedicine"

}

}
