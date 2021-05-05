import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
//import { HomePage } from './home.page';
//import {Angular}

import { HomePageRoutingModule } from './home-routing.module';
//import {IonicPageModule} from 'ionic-angular';//HomePageModule
//import {HomePage} from "./home";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [HomePageModule]
})
export class HomePageModule {}
