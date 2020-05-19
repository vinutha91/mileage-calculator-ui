import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';

import {HomeComponent} from './modules/home/home.component';
import {TripDetailsComponent} from './modules/addTripDetails/tripDetails.component';
import {LoginUserComponent} from './modules/loginUser/loginUser.component';
import {FooterComponent} from './layoutHelpers/footer/footer.component';
import {HeaderComponent} from './layoutHelpers/header/header.component';
import {ErrorComponent} from './errorHandling/errorComponent/error.component';
import {RegistrationComponent} from './modules/registration/registration.component';
import {RegisterVehicleService} from './service/registerVehicle.service';
import {MileageGraphComponent} from './modules/mileageGraph/mileageGraph.component';
import {RegisterUserService} from './service/registerUserService';
import {ErrorService} from './errorHandling/errorComponent/error.service';
import {TripDetailsService} from './service/tripDetails.service';
import {LoginUserService} from './service/loginUserService';

/*import {HttpErrorInterceptor } from './errorHandling/http-error.interceptor';*/

import {TrimPipe} from './pipes/trimPipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TripDetailsComponent,
    FooterComponent,
    HeaderComponent,
    ErrorComponent,
    MileageGraphComponent,
    LoginUserComponent,
    RegistrationComponent,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [
    RegisterVehicleService,
    ErrorService,
    RegisterUserService,
    TripDetailsService,
    LoginUserService/*,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
