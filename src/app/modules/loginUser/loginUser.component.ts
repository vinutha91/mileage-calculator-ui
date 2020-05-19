import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {LoginUserService} from '../../service/loginUserService';

@Component({
  selector : 'app-login',
  templateUrl: './loginUser.component.html'
})
export class LoginUserComponent{
constructor(private loginUserService: LoginUserService,
                 private router:Router) { }
 error: string;
form = new FormGroup({
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
      const value = this.form.value;


      this.loginUserService.authenticate(value).subscribe(
            res => {
             this.router.navigate(['/home']);
            },
            error => {
              this.error = error;
              console.log(error);
            }
          );
    }
}
