import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {

  @Input() childresponse:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.childresponse)
    // j
  }
  
  request(){
    // sessionStorage.setItem('medicinename', this.medicine.medicineName);
    // window.location.reload();
   
    this.router.navigate(['request'])

  }

}
