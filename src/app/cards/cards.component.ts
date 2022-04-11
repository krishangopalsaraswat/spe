import { Component, OnInit } from '@angular/core';
import { medicineResponse } from '../medicineResponse';
import { AddMedicineService } from '../service/add-medicine.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

// ****object to recieve data from backend*****
  medicine:any;

  constructor(private service:AddMedicineService) { }

 
  ngOnInit(): void {
    // ****************subscribe function to load data from backend************
    let resp=this.service.getallmedicines();
    resp.subscribe((data)=>this.medicine=data);
 
  }

}
