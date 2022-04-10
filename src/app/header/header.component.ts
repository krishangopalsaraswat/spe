import { Component, OnInit } from '@angular/core';
import { medicineResponse } from '../medicineResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  medicineresponse:medicineResponse=new medicineResponse();

  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;
}
