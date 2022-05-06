import { Component, OnInit } from '@angular/core';
import { ShowDonComponent } from '../show-don/show-don.component';

@Component({
  selector: 'app-update-tablet-count',
  templateUrl: './update-tablet-count.component.html',
  styleUrls: ['./update-tablet-count.component.css']
})
export class UpdateTabletCountComponent implements OnInit {

  constructor() { }
  updatedCount:any;
  ngOnInit(): void {
    // console.log(this.comp.valuesToPopup)
  }

}
