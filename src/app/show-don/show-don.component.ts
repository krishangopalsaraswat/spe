import { Component, OnInit,Input } from '@angular/core';
import { ShowDonationsService } from '../service/show-donations.service';
// import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-show-don',
  templateUrl: './show-don.component.html',
  styleUrls: ['./show-don.component.css']
})
export class ShowDonComponent implements OnInit {

  donations:any;

  @Input() ChildMobileResponse:any;
  constructor(private service: ShowDonationsService) { }

  delete(id){
    this.service.deleteById(id).subscribe((data)=> this.donations=data);
  }

  ngOnInit(): void {
    // this.service.getDonations("123").subscribe((data)=> this.donations=data);
    console.log(this.ChildMobileResponse)
  }

}
