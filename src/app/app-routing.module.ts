import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {TripDetailsComponent} from './modules/addTripDetails/tripDetails.component';
import {RegistrationComponent} from './modules/registration/registration.component';
import {LoginUserComponent} from './modules/loginUser/loginUser.component';
import {MileageGraphComponent} from './modules/mileageGraph/mileageGraph.component';

const routes: Routes = [
 /* {path: '' , component: HomeComponent},*/

  {path: 'addTripDetails/:vehicleNo' , component : TripDetailsComponent},
  {path:'login',component:LoginUserComponent},
  {path: 'register', component: RegistrationComponent},
  {path:'',component:LoginUserComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
