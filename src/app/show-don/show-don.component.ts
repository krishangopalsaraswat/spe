import { Component, OnInit } from '@angular/core';
import { ShowDonationsService } from '../service/show-donations.service';
// import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-show-don',
  templateUrl: './show-don.component.html',
  styleUrls: ['./show-don.component.css']
})
export class ShowDonComponent implements OnInit {

  donations:any;

  constructor(private service: ShowDonationsService) { }

  ngOnInit(): void {
    this.service.getDonations("123").subscribe((data)=> this.donations=data);
  }

}
