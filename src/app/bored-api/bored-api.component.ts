import { Component, OnInit } from '@angular/core';
import { AddMedicineService } from '../service/add-medicine.service';

@Component({
  selector: 'app-bored-api',
  templateUrl: './bored-api.component.html',
  styleUrls: ['./bored-api.component.css']
})
export class BoredApiComponent implements OnInit {

  constructor(private service:AddMedicineService) { }

  ngOnInit(): void {
  }


  activity: string = "";
bored() {
  this.service.getBored().subscribe(
    (data: any) => {
      this.activity = data.activity;
      console.log('Obtained boredom is!', data)
    },
   
    (error: any) => { console.log('Error storing mood!', error) }
  )
}
}
