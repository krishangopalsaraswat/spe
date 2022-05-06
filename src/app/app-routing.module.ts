import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { ShowDonComponent } from './show-don/show-don.component';

const routes: Routes = [
  {path:"", component:CardsComponent},
  {path:"donateMedicine",component:AddMedicineComponent} ,
  {path:"home",component:CardsComponent},
  {path:"getMedicine/:medName",component:SearchDataComponent},
  {path:"authentication",component:AuthenticationComponent},
  {path:"showDonations",component:ShowDonComponent},
  {path:"request/:medName/:tabletCount/:useremail",component:HomeComponent},
  {path:"getByCategory/:category", component:SearchByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
