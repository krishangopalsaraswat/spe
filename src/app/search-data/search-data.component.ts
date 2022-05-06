import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMedicineService } from '../service/add-medicine.service';


@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {

  childresponse:any;

  constructor(private router:Router,
    private service:AddMedicineService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      // this.medcineCategory=params.get('category'); 
      console.log(params.get('medName'))
      this.service.getmedicinebyName(params.get('medName')).subscribe((data)=>this.childresponse=data)
  });
    
    
  }
  
    
  
  
  request(mname,tcount,useremail){

   this.router.navigate(['request',mname,tcount,useremail])
  }

  }

  

  
