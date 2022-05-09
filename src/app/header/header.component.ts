import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationComponent} from '../authentication/authentication.component';
import { AddMedicineService } from '../service/add-medicine.service';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { ShowDonationsService } from '../service/show-donations.service';
import {MatDialog} from '@angular/material/dialog';
import { BoredApiComponent } from '../bored-api/bored-api.component';

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
    public showDownService:ShowDonationsService,
    public dialog: MatDialog) {}

  

  ngOnInit(): void {
    
  }

//   openDialog() {
//     const dialogRef = this.dialog.open(DialogContentExampleDialog);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
//   }
// }) 

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
popup = false;

close(){
  // this.popup=false;
  // this.router.navigate(['authentication'])
  // window.location.href="authentication"


}

// *****************bored api popup**************

openDialog(): void {
  const dialogRef = this.dialog.open(BoredApiComponent, {
    width: '250px',
    // data: {name: this.name, animal: this.animal},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
  });
}
}




