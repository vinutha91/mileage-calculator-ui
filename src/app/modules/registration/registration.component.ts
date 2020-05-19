import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterUserService} from '../../service/registerUserService';

@Component({
  selector : 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent{
  constructor(private regUserService: RegisterUserService
                 ) { }

 error: string;
 userRegistered :boolean =  false;
  form = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  get formCntrls(){
    return this.form.controls;
  }
  isSubmitted = false;
  submit(){
    this.isSubmitted = true;
    if (this.form.invalid){
      return;
    }
this.regUserService.register(this.form.value).subscribe(
      res => {
      this.userRegistered = true;
        console.log(res);
        //this.router.navigate(['/addTripDetails', this.form.value.vehicleNo]);
      },
      error => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
