import { Component, OnInit,Input } from '@angular/core';
import { ShowDonationsService } from '../service/show-donations.service';
// import { AuthenticationComponent } from '../authentication/authentication.component';
import {MatDialog} from '@angular/material/dialog';
import { AddMedicineComponent } from '../add-medicine/add-medicine.component';
import { UpdateTabletCountComponent } from '../update-tablet-count/update-tablet-count.component';


@Component({
  selector: 'app-show-don',
  templateUrl: './show-don.component.html',
  styleUrls: ['./show-don.component.css']
})
export class ShowDonComponent implements OnInit {

  donations:any;

  ChildMobileResponse:any;
  constructor(private service: ShowDonationsService,public dialog: MatDialog) { }

  delete(id){
    this.service.deleteById(id).subscribe((data)=> this.donations=data)
    console.log("deletion done")
    this.ngOnInit();
    window.location.href="showDonations"
  }

  ngOnInit(): void {
    // this.service.getDonations("123").subscribe((data)=> this.donations=data);
    
    this.service.getDonations(sessionStorage.getItem('authenticatedUser')).subscribe(
      response=>(this.ChildMobileResponse=response)
    )
  }
   
  
  openDialog() {
    const dialogRef = this.dialog.open(UpdateTabletCountComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

