import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {TripDetailsComponent} from './modules/addTripDetails/tripDetails.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'addTripDetails/:vehicleNo' , component : TripDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
