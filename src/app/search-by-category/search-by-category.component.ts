import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchByCategoryService } from '../service/search-by-category.service';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.css']
})
export class SearchByCategoryComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,
    private service:SearchByCategoryService) { }

    medcineCategory:any;
    

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['category'])
    // console.log(this.route.snapshot.paramMap.get('category'))
    this.route.paramMap.subscribe(params => { 
      // this.medcineCategory=params.get('category'); 
      console.log(params.get('category'))
      this.service.getMedicineByCategory(params.get('category')).subscribe((data)=>this.medcineCategory=data)
  });
  // console.log(this.medcineCategory)
  // this.service.getMedicineByCategory('vitamins').subscribe((data)=>console.log(data));

  }
  

  // request(){
  //   // sessionStorage.setItem('medicinename', this.medicine.medicineName);
  //   // window.location.reload();
   
  //   this.router.navigate(['request'])

  // }

  request(mname,tcount,useremail){
    // sessionStorage.setItem('medicinename', this.medicine.medicineName);
    this.router.navigate(['request',mname,tcount,useremail])
  }

}
