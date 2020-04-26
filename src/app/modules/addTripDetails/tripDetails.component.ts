import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RegisterVehicleService} from '../../service/registerVehicle.service';
/*import {ErrorService} from '../../errorHandling/errorComponent/error.service';*/
import {errorConstants} from '../../errorHandling/error-constants';

@Component({
  selector : 'app-trip-details',
  templateUrl: './tripDetails.component.html'
})

export class TripDetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              private regVehService: RegisterVehicleService/*,
              private errorService: ErrorService*/) {
    this.route.params.subscribe(params => this.vehicleNo = params.vehicleNo );
  }
  vehicleNo: string;
  lastTripReading = 0;
  isSubmitted = false;
  litresFilled: string;
  fuelPricePerltr: number;
  currentKmsReading: number;
  petrolFilledForAmt: number;
  form = new FormGroup({
    lastTripReading : new FormControl('', [Validators.required]),
    currentKmsReading: new FormControl('', [Validators.required, Validators.min(this.lastTripReading)]),
    petrolFilledForAmt: new FormControl('', [Validators.required]),
    fuelPricePerltr: new FormControl('', [Validators.required]),
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
    const lastUpdatedDate: Date = new Date();
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
        // this.form.value.lastTripReading = data[0].initial_kms_reading;
      },
      error => {

      }
    );
  }
  calcLtrsFilled(){
      if (this.petrolFilledForAmt && this.fuelPricePerltr){
        this.litresFilled = (this.petrolFilledForAmt / this.fuelPricePerltr).toFixed(2);
      }
  }
  validateReading(){
    if (this.currentKmsReading < this.lastTripReading){
      // this.errorService.showGlobalError(errorConstants.currentReadingLessThanPrev);
    }
  }
}
