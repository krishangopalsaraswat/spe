import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { medicineRequest } from '../medicineRequest';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() homechild:any;
medicinerequest:medicineRequest=new medicineRequest;
  constructor(private router:Router,
    public card:CardsComponent) { 
      // console.log(this.router.getCurrentNavigation().extras.state.example); 
    }
  
  
  ngOnInit() {
    console.log(this.homechild)

}

requestmedicine(){

  console.log(this.card.medname),
  // console.log(this.medicinerequest.medicinename)
  this.router.navigate(['home'])
  
}

}

