import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RegisterVehicleService} from '../../service/registerVehicle.service';

@Component({
  selector : 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private regVehService: RegisterVehicleService,
              private router: Router) { }
  error: string;
  form = new FormGroup({
    vehicleNo: new FormControl('', [Validators.required]),
   //  userEmail: new FormControl('', [Validators.required, Validators.email]),
    // userEmail: new FormControl('', [Validators.required]),
    vehicleModel: new FormControl('', [Validators.required, Validators.minLength(3)]),
    initialKmsReading: new FormControl('', [Validators.required,Validators.pattern(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)])
  });
  isSubmitted = false;
  ngOnInit(): void {
  }

  get formCntrls(){
    return this.form.controls;
  }
  submit(){
    // console.log(this.form.value);
    this.isSubmitted = true;
    if (this.form.invalid){
          return;
    }
    this.regVehService.signUpUser(this.form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/addTripDetails', this.form.value.vehicleNo]);
      },
      error => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
