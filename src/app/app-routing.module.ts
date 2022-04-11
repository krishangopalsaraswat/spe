import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:"", component:CardsComponent},
  {path:"donateMedicine",component:AddMedicineComponent} ,
  {path:"home",component:CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
