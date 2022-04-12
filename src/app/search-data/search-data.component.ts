import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {

  @Input() childresponse:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.childresponse)
  }

}
