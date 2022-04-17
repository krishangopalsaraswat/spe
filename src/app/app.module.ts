import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import { SearchDataComponent } from './search-data/search-data.component';
import { AuthenticationComponent } from './authentication/authentication.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { ShowDonComponent } from './show-don/show-don.component';
>>>>>>> 4215c43cb1853f21c730f4c02d5a109f3be83914





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddMedicineComponent,
    CardsComponent,
    SearchDataComponent,
    AuthenticationComponent,
<<<<<<< HEAD
    HomeComponent
=======
    ShowDonComponent
>>>>>>> 4215c43cb1853f21c730f4c02d5a109f3be83914
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    LayoutModule
  ],
  providers: [AuthenticationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
