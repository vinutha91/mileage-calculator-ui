import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RegisterVehicleService} from '../../service/registerVehicle.service';
/*import {ErrorService} from '../../errorHandling/errorComponent/error.service';*/
import {errorConstants} from '../../errorHandling/error-constants';
import {TripDetailsService} from '../../service/tripDetails.service';

@Component({
  selector : 'app-trip-details',
  templateUrl: './tripDetails.component.html'
})

export class TripDetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              private regVehService: RegisterVehicleService,
              private tripDetailsService: TripDetailsService) {
    this.route.params.subscribe(params => this.vehicleNo = params.vehicleNo );
  }
  vehicleNo: string;
  lastTripReading = 0;
  isSubmitted = false;
  litresFilled: string;
  fuelPricePerltr: number;
  currentKmsReading: number;
  petrolFilledForAmt: number;
  test: any;
  form = new FormGroup({
    lastTripReading : new FormControl('', [Validators.required]),
    currentKmsReading: new FormControl(''),
    petrolFilledForAmt: new FormControl('', [Validators.required, Validators.min(1)]),
    fuelPricePerltr: new FormControl('', [Validators.required, Validators.min(1)]),
    litresFilled: new FormControl('', [Validators.required])
  });
  get formCntrls(){
    return this.form.controls;
  }
  submit(){
    this.isSubmitted = true;
    if (this.form.invalid){
      return;
    }
    /*const lastUpdatedDate: string = new Date().toUTCString();
    formData.lastUpdatedDate = lastUpdatedDate;*/
    const formData = this.form.value;
    formData.vehicleNo = this.vehicleNo;
    this.tripDetailsService.addTrip(formData).subscribe(
      (data) => {
        alert();
      },
      error => {
        alert(error);
      }
      );
  }

  ngOnInit(): void {
    if (this.vehicleNo){
      this.getTripDetails(this.vehicleNo);
    }
  }
  getTripDetails(vehicleNo: string){
    this.regVehService.getVehicleDetails(vehicleNo).subscribe(
      (data) => {
        this.lastTripReading = data[0].initial_kms_reading;
        this.initializeFormData();
        // this.form.value.lastTripReading = data[0].initial_kms_reading;
      },
      error => {

      }
    );
  }
  initializeFormData(){
    const validators = [ Validators.required, Validators.min(this.lastTripReading) ];
   // this.form.addControl('curReading', new FormControl('', validators));
    this.form.get('currentKmsReading').setValidators(validators);
  }
  calcLtrsFilled(){
      if (this.petrolFilledForAmt && this.fuelPricePerltr){
        this.litresFilled = (this.petrolFilledForAmt / this.fuelPricePerltr).toFixed(2);
      }
  }
  // validateReading(){
  //   console.log(this.formCntrls.currentKmsReading);
  //   console.log(this.lastTripReading);
  //   if (this.currentKmsReading < this.lastTripReading){
  //     // this.errorService.showGlobalError(errorConstants.currentReadingLessThanPrev);
  //   }
  // }
}
