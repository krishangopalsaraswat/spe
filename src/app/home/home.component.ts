import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { medicineRequest } from '../medicineRequest';
import { Location } from '@angular/common';
import { RequestServiceService } from '../service/request-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() homechild:any;
medicinerequest:medicineRequest=new medicineRequest;

  constructor(private router:Router,
    public card:CardsComponent,
    private service:RequestServiceService,
    private route:ActivatedRoute) { 
      // console.log(this.router.getCurrentNavigation().extras.state.example); 
    }
  
    requestedMedicineName:any;
    availableTablets:any;
    submitted:any;
    

  
  ngOnInit() {
    this.requestedMedicineName=this.route.snapshot.params['medName']
    this.availableTablets=this.route.snapshot.params['tabletCount']
    // console.log(this.route.snapshot.params['medName'])
    this.medicinerequest.userEmail=this.route.snapshot.params['useremail']
    console.log(this.medicinerequest.userEmail)
    this.submitted = false;
}


requestmedicine(){
      this.service.sendemailForRequest(this.medicinerequest).subscribe(
        response=>console.log("ok")
      ),
        this.submitted = true;
  
}
redirect(){
  this.router.navigate(['home'])

}

}

