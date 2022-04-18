import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { medicineRequest } from '../medicineRequest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
medicinerequest:medicineRequest=new medicineRequest;
  constructor(private router:Router,
    public card:CardsComponent) { }
  
  
  ngOnInit() {
    
}
medname:any;
requestmedicine(){
  console.log(sessionStorage.getItem('medicinename'));
  console.log(this.medicinerequest.medicinename)
  this.router.navigate(['home'])
}

}

